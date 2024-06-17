import React from 'react';
import { Button,  useTheme, Title } from 'react-native-paper';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { createDraft } from '../Redux/Actions'; // replace with the actual path to your actions
import { MaterialCommunityIcons } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fffcf7',
  },
  title:{
    fontSize: windowWidth * 0.09,
    fontWeight: 'bold',
  },
  header: {
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderBottomWidth: 6,
    borderBottomColor: '#ddd',
    flexDirection: 'row',
    flex: 2.2,
  },
  body: {
    flex: 12,
    width: '100%',
    alignItems: 'center',
  },
});

const SurveyCreatorScreen = ({ navigation, downloadedSurveys, createDraft, goToDraftScreen }) => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{flex: 2, alignItems: 'center', justifyContent: 'space-around'}} >
          <MaterialCommunityIcons name="gesture-tap-button" color={colors.primary} size={windowHeight * 0.11} />
        </View>
        <Text style={[styles.title, {color: colors.primary, flex: 5.5, alignSelf: 'center'}]}>
          Choose a Survey
        </Text>
      </View>
      <View style={styles.body}>
        <Button
          mode="contained"
          style={{
            backgroundColor: colors.primary,
            marginTop: 20,
            borderWidth: 12,
            width: '90%',
          }}
          onPress={() => {
            // Create a draft for the "Internet Variant - W.H.O. Survey"
            createDraft({
              name: 'Internet Variant - W.H.O. Survey',
              // Add any other data you need for the survey...
            });
            // Navigate to the DraftScreen
            goToDraftScreen();
          }}
        >
          <Text style={{fontSize: 20, color: 'white'}}>Internet - W.H.O. Survey</Text>
        </Button>
        {downloadedSurveys.map((survey, index) => (
          <Button
            key={index}
            mode="contained"
            style={{
              backgroundColor: colors.primary,
              marginTop: 20,
              borderWidth: 12,
              width: '90%',
            }}
            onPress={() => {
              createDraft(survey);
              goToDraftScreen();
            }}
          >
            <Text style={{ fontSize: 20, color: 'white' }}>
              {survey.name}
            </Text>
          </Button>
        ))}
      </View>
    </View>
  );
}

const mapStateToProps = state => ({
  downloadedSurveys: state.surveys,
  drafts: state.drafts,
});

const mapDispatchToProps = dispatch => ({
  createDraft: survey => dispatch(createDraft(survey)),
});


export default connect(mapStateToProps, mapDispatchToProps)(SurveyCreatorScreen);
