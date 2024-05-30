import React from 'react';
import { Button,  useTheme, Title } from 'react-native-paper';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { createDraft } from '../Redux/Actions'; // replace with the actual path to your actions
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fffcf7',
  },
  title:{
    fontSize: 30, 
    fontWeight: 'bold',
  },
  header: {
    width: '100%',
    padding: 20,
    backgroundColor: '#f5f5f5', 
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 6,
    borderBottomColor: '#ddd', 
  }
});

const SurveyCreatorScreen = ({ navigation, downloadedSurveys, createDraft }) => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Title style={[styles.title, {color: colors.primary}]}>Choose a Survey</Title>
      </View>
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
          navigation.navigate('Draft Screen');
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
            navigation.navigate('Draft Screen');
          }}
        >
          <Text style={{ fontSize: 20, color: 'white' }}>
            {survey.name}
          </Text>
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