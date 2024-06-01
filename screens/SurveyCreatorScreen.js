import React from 'react';
import { Button, Text, useTheme, Title } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { createDraft } from '../Redux/Actions'; // replace with the actual path to your actions
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fffcf7',
  },
  title:{
    fontSize: 24, fontWeight: 'bold'
  }
});

const SurveyCreatorScreen = ({ navigation, downloadedSurveys, createDraft }) => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Title style={[styles.title, {color: colors.primary}]}>Survey Creator</Title>
      <Button
        mode="contained"
        style={{ backgroundColor: colors.primary, marginTop: 20 }}
        onPress={() => {
          // Create a draft for the "Internet Variant - W.H.O. Survey"
          createDraft({
            name: 'Internet Variant - W.H.O. Survey',
            // Add any other data you need for the survey...
          });
          // Navigate to the DraftScreen
          navigation.navigate('Draft Screen');
        }}
      >
        INTERNET Variant - W.H.O. Survey
      </Button>
      {downloadedSurveys.map((survey, index) => (
        <Button
          key={index}
          mode="contained"
          style={{ backgroundColor: colors.primary, marginTop: 20 }}
          onPress={() => {
            createDraft(survey);
            navigation.navigate('Draft Screen');
          }}
        >
          {survey.name}
        </Button>
      ))}
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