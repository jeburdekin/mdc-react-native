import React from 'react';
import { View, StyleSheet, Alert, Dimensions } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { Text, Card, ProgressBar, Button, DefaultTheme, PaperProvider } from 'react-native-paper';
import { connect } from 'react-redux';
import { addSurvey } from '../Redux/Actions';
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6200ee',
    accent: '#fffcf7',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fffcf7',
  },
  button: {
    backgroundColor: '#E57C63',
    width: windowWidth * 0.85,
    padding: 12,
    borderRadius: 20,
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20
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
    backgroundColor: theme.primary,
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

class DownloadSurveyScreen extends React.Component {
  state = {
    surveys: [],
    downloadProgress: 0,
  };

  downloadFile = async (surveyName) => {
  // Check if the survey is already downloaded
  if (this.props.downloadedSurveys.some(survey => survey.name === surveyName)) {
    Alert.alert('Download failed', 'This survey has already been downloaded.');
    return;
  }

  const url = await generateDownloadUrl(surveyName);
  const localUri = FileSystem.documentDirectory + surveyName + '.csv';

  const downloadResumable = FileSystem.createDownloadResumable(
    url, 
    localUri, 
    {}, 
    (progress) => {
      this.setState({ downloadProgress: progress.totalBytesWritten / progress.totalBytesExpectedToWrite });
    }
  );

  downloadResumable.downloadAsync()
    .then(({ uri }) => {
      console.log('Finished downloading to ', uri);
      this.setState({ downloadProgress: 0 });
      this.props.addSurvey({ uri, name: surveyName });
      Alert.alert('Download complete', 'The file has been downloaded successfully.');
    })
    .catch(error => {
      console.error(error);
    });
}

  render() {
    return (
      <PaperProvider theme={theme}>
        <View style={styles.container}>
          <Text>Download Surveys Screen</Text>
          <Button mode="contained" onPress={() => this.downloadFile('Interviewer Questions')} style={styles.button}>
            <Text style={styles.buttonText}>Interviewer Questions</Text>
          </Button>
          {/* <Button mode="contained" onPress={() => this.downloadFile('Survey 2')} style={styles.button}>
            <Text style={styles.buttonText}>Download Survey 2</Text>
          </Button> */}
          <ProgressBar progress={this.state.downloadProgress} color={theme.colors.primary} />
          <View style={styles.downloadedSurveysContainer}>
            {this.props.downloadedSurveys.map((survey, index) => (
              <View key={index} style={styles.downloadedSurvey}>
                <Text style={styles.downloadedSurveyText}>Survey {index + 1}</Text>
              </View>
            ))}
          </View>
          {this.props.downloadedSurveys.map((survey, index) => (
            <Card key={index} style={styles.card}>
              <Card.Content>
                <Text>Downloaded Survey {index + 1}</Text>
                <Text>URI: {survey.uri}</Text>
              </Card.Content>
            </Card>
          ))}
        </View>
      </PaperProvider>
    );
  }
}

const mapStateToProps = state => ({
  downloadedSurveys: state.surveys,
});

const mapDispatchToProps = {
  addSurvey,
};

export default connect(mapStateToProps, mapDispatchToProps)(DownloadSurveyScreen);