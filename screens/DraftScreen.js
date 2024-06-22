import * as React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { useTheme, Title, Button, Menu, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { surveyStore } from "../Zustand State Management/zustandStore.js";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fffcf7',
  },
  title: {
    fontSize: windowWidth * 0.09,
    fontWeight: 'bold',
  },
  header: {
    backgroundColor: '#f5f5f5',
    borderBottomWidth: 6,
    borderBottomColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 2.2,
  },
  body: {
    flex: 12,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

const DraftScreen = ({ navigation, goToReadyScreen }) => {
  const { colors } = useTheme();
  const surveyDrafts = surveyStore((state) => state.surveyDrafts);
  const setCurrentlyUsedID = surveyStore((state) => state.setCurrentlyUsedID);

  // Filter out completed surveys
  const incompleteSurveys = Object.entries(surveyDrafts).filter(
    ([key, draft]) => !draft.isSurveyCompleted
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
          <MaterialCommunityIcons name="file-sign" color={colors.primary} size={windowHeight * 0.115} />
        </View>
        <Text style={[styles.title, { color: colors.primary, flex: 2.4, alignSelf: 'center' }]}>Survey Drafts</Text>
      </View>
      <View style={styles.body}>
        {incompleteSurveys.map(([key, draft], index) => (
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
              setCurrentlyUsedID(key);
              navigation.navigate('Survey Screen', { goToReadyScreen });
            }}
          >
            <Text style={{ fontSize: 20 }}>
              {draft.name + " " + (index + 1)}
            </Text>
          </Button>
        ))}
      </View>
    </View>
  );
};



export default DraftScreen;
