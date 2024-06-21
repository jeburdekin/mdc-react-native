import * as React from 'react';
import { Button,  useTheme, Title } from 'react-native-paper';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { surveyStore } from '../Zustand State Management/zustandStore';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { useNavigation } from '@react-navigation/native';


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

const SurveyCreatorScreen = ({ goToDraftScreen }) => {
  const { colors } = useTheme();
  const addSurvey = surveyStore(state => state.addSurvey);
  const addSurveyName = surveyStore(state => state.addSurveyName);
  const setRecentlyCreatedDraftID = surveyStore(state => state.setRecentID);

  const createDraft = () => {
    const newDraftID = uuidv4();
    addSurvey(newDraftID);
    return newDraftID;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{flex: 2, alignItems: 'center', justifyContent: 'space-around'}} >
          <MaterialCommunityIcons name="gesture-tap-button" color={colors.primary} size={windowHeight * 0.11} />
        </View>
        <Text style={[styles.title, {color: colors.primary, flex: 5.5, alignSelf: 'center'}]}>
          Pick a Survey
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
            const newDraft = createDraft();
            setRecentlyCreatedDraftID(newDraft);
            addSurveyName(newDraft, 'Internet - W.H.O. Survey');

            // Navigate to the DraftScreen
            goToDraftScreen();
          }}
        >
          <Text style={{fontSize: 20, color: 'white'}}>Internet - W.H.O. Survey</Text>
        </Button>
        {/* {downloadedSurveys.map((survey, index) => (
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
        ))} */}
      </View>
    </View>
  );
}

export default SurveyCreatorScreen;
