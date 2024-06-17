import React, { useState } from 'react';
import { View, StyleSheet, Alert, Dimensions } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { Text, Card, ProgressBar, Button, useTheme } from 'react-native-paper';
import { connect } from 'react-redux';
import { addSurvey } from '../Redux/Actions';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fffcf7',
  },
  header: {
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    borderBottomWidth: 6,
    borderBottomColor: '#ddd',
    flexDirection: 'row',
    flex: 2.2,
  },
  title:{
    fontSize: windowWidth * 0.09,
    fontWeight: 'bold',
  },
  button: {
    width: windowWidth * 0.85,
    padding: 12,
    borderRadius: 20,
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  downloadedSurveysContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 20,
  },
  downloadedSurvey: {
    width: 100,
    height: 100,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    zIndex: 1,
  },
  downloadedSurveyText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  card: {
    marginVertical: 10,
    width: '90%',
  },
  body: {
    flex: 12,
    width: '100%',
    alignItems: 'center',
  },
});

const generateDownloadUrl = async (surveyName) => {
  const storage = getStorage();
  const storageRef = ref(storage, surveyName + '.csv');

  try {
    const url = await getDownloadURL(storageRef);
    console.log('File available at', url);
    return url;
  } catch (error) {
    console.error('Error generating download URL:', error);
  }
}

const DownloadSurveyScreen = ({ downloadedSurveys, addSurvey }) => {
  const [downloadProgress, setDownloadProgress] = useState(0);
  const { colors } = useTheme();

  const downloadFile = async (surveyName) => {
    if (downloadedSurveys.some(survey => survey.name === surveyName)) {
      Alert.alert('Check Below', 'This survey has already been downloaded.');
      return;
    }

    const url = await generateDownloadUrl(surveyName);
    const localUri = FileSystem.documentDirectory + surveyName + '.csv';

    const downloadResumable = FileSystem.createDownloadResumable(
      url,
      localUri,
      {},
      (progress) => {
        setDownloadProgress(progress.totalBytesWritten / progress.totalBytesExpectedToWrite);
      }
    );

    downloadResumable.downloadAsync()
      .then(({ uri }) => {
        console.log('Finished downloading to ', uri);
        setDownloadProgress(0);
        addSurvey({ uri, name: surveyName });
        Alert.alert('Download complete', 'The file has been downloaded successfully.');
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{flex: 0.35, alignItems: 'flex-end', justifyContent: 'space-around'}}>
          <MaterialCommunityIcons name="cloud-download-outline" color={colors.primary} size={windowHeight * 0.13} />
        </View>
        <View style={{flex: 0.6}}>
          <Text style={[styles.title, {color: colors.primary, alignSelf: 'center'}]}>Download</Text>
          <Text style={[styles.title, {color: colors.primary, alignSelf: 'center'}]}>Surveys</Text>
        </View>

      </View>
      <View style={styles.body}>
        <Button mode="contained" onPress={() => downloadFile('Interviewer Questions')} style={styles.button}>
          <Text style={styles.buttonText}>Interviewer Questions</Text>
        </Button>
        <ProgressBar progress={downloadProgress} color={colors.primary} />
        <View style={styles.downloadedSurveysContainer}>
          {downloadedSurveys.map((survey, index) => (
            <View key={index} style={styles.downloadedSurvey}>
              <Text style={styles.downloadedSurveyText}>Survey {index + 1}</Text>
            </View>
          ))}
        </View>
        {downloadedSurveys.map((survey, index) => (
          <Card key={index} style={styles.card}>
            <Card.Content>
              <Text>Downloaded Survey {index + 1}</Text>
              <Text>URI: {survey.uri}</Text>
            </Card.Content>
          </Card>
        ))}
      </View>
    </View>
  );
}

const mapStateToProps = state => ({
  downloadedSurveys: state.surveys,
});

const mapDispatchToProps = {
  addSurvey,
};

export default connect(mapStateToProps, mapDispatchToProps)(DownloadSurveyScreen);
