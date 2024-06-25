import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions, Alert } from 'react-native';
import { useTheme, Button, Modal } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { surveyStore } from "../Zustand State Management/zustandStore.js";
import { GestureDetector, Gesture } from 'react-native-gesture-handler';

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
  deleteButton: {
    color: 'red',
    fontWeight: 'bold',
    marginTop: 20,
  },
  modalContent: {
    padding: 22,
    margin: 5,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white',
    borderWidth: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    elevation: 10,
    height: windowHeight * 0.25,
    width: windowWidth * 0.8,
  },
  modalText: {
    fontSize: windowWidth * 0.05,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
});

const DraftScreen = ({ navigation, goToReadyScreen }) => {
  const { colors } = useTheme();
  const surveyDrafts = surveyStore((state) => state.surveyDrafts);
  const setCurrentlyUsedID = surveyStore((state) => state.setCurrentlyUsedID);
  const removeSurvey = surveyStore((state) => state.removeSurvey);

  const [isModalVisible, setModalVisible] = React.useState(false);
  const [selectedDraft, setSelectedDraft] = React.useState(null);

  useEffect(() => {
  }, [surveyDrafts]);

  // Filter out completed surveys
  const incompleteSurveys = Object.entries(surveyDrafts)
    .filter(([key, draft]) => !draft.isSurveyCompleted)
    .sort((a, b) => new Date(a[1].creationTime) - new Date(b[1].creationTime)
  );

  const handleLongPress = (key) => {
    setSelectedDraft(key);
    setModalVisible(true);
  };

  const handleDelete = () => {
    removeSurvey(selectedDraft);
    setModalVisible(false);
  };

  const formatDate = (dateString) => {
    if (!dateString) {
      console.log("Invalid Date");
      return "Invalid Date";
    }

    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
        console.log("Invalid date string:", dateString);
        return "Invalid Date";
    }

    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };

    const formattedDate = new Intl.DateTimeFormat('en-US', dateOptions).format(date);
    const formattedTime = new Intl.DateTimeFormat('en-US', timeOptions).format(date);

    return `${formattedDate} ${formattedTime}`;
};


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
          <MaterialCommunityIcons name="file-sign" color={colors.primary} size={windowHeight * 0.115} />
        </View>
        <Text style={[styles.title, { color: colors.primary, flex: 2.4, alignSelf: 'center' }]}>Survey Drafts</Text>
      </View>
      <View style={styles.body}>
        {incompleteSurveys.map(([key, draft], index) => {
          const longPressGesture = Gesture.LongPress()
            .runOnJS(true)
            .onStart(() => {
              handleLongPress(key);
            });
          return (
            <GestureDetector key={key} gesture={longPressGesture}>
              <Button
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
                <View>
                  <Text style={{ fontSize: windowWidth * 0.05, color: 'white', alignSelf: 'center', fontWeight: 'bold' }}>
                    {draft.name}
                  </Text>
                  <Text style={{ fontSize: windowWidth * 0.035, color: 'white', alignSelf: 'center' }}>
                    {formatDate(draft.creationTime)}
                  </Text>
                </View>
              </Button>
            </GestureDetector>
          );
        })}
      </View>
      <Modal visible={isModalVisible} onDismiss={() => setModalVisible(false)}>
        <View style={styles.modalContent}>
          <Text style={[styles.modalText,]}>Are you sure you want to delete this survey?</Text>
          <Button onPress={handleDelete} mode="elevated">
            <Text style={styles.deleteButton}>Delete</Text>
          </Button>
          <Button onPress={() => setModalVisible(false)} mode="contained" style={{marginTop: 10}}>
            Cancel
          </Button>
        </View>
      </Modal>
    </View>
  );
};



export default DraftScreen;
