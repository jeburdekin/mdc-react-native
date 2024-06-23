import * as React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { useTheme, Title, Button, Portal, Dialog } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FlashList } from "@shopify/flash-list";
import { surveyStore } from "../Zustand State Management/zustandStore";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fffcf7",
  },
  title: {
    fontSize: windowWidth * 0.1,
    fontWeight: "bold",
  },
  header: {
    width: "100%",
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderBottomWidth: 6,
    borderBottomColor: "#ddd",
    flexDirection: "row",
    flex: 2.2,
  },
  body: {
    flex: 12,
    width: "100%",
    alignItems: "center",
  },
  button: {
    width: windowWidth * 0.85,
    padding: 12,
    borderRadius: 20,
    marginTop: 20,
  },
});

const PreparedSurvScreen = ({}) => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const [visible, setVisible] = React.useState(false);
  const [selectedSurvey, setSelectedSurvey] = React.useState([]);
  const surveyDrafts = surveyStore((state) => state.surveyDrafts);

  const getCompletedSurveys = () => {
    return Object.entries(surveyDrafts)
      .filter(([key, survey]) => survey.isSurveyCompleted)
      .map(([key, survey]) => survey);
  };
  const completedSurveys = getCompletedSurveys();

  const handlePress = (survey) => {
    setSelectedSurvey(survey);
    setVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ alignItems: "flex-end", flex: 0.275 }}>
          <MaterialCommunityIcons
            name="checkbox-multiple-marked-outline"
            color={colors.primary}
            size={windowHeight * 0.115}
          />
        </View>
        <View style={{ flex: 0.7 }}>
          <Text
            style={[
              styles.title,
              { color: colors.primary, alignSelf: "center" },
            ]}
          >
            Completed
          </Text>
          <Text
            style={[
              styles.title,
              { color: colors.primary, alignSelf: "center" },
            ]}
          >
            Surveys
          </Text>
        </View>
      </View>
      <View style={styles.body}>
        {completedSurveys.map((surveyData, index) => (
          <Button
            key={index}
            onPress={() => handlePress(surveyData)}
            style={[styles.button, { backgroundColor: colors.primary}]}
          >
            <Text style={{color: 'white', fontSize: windowHeight * 0.024, fontWeight: 'bold'}}>
              {`${surveyData.name}`}
            </Text>
          </Button>
        ))}
        <Portal style={{ flex: 1 }}>
          <Dialog visible={visible} onDismiss={() => setVisible(false)}>
            <Dialog.Title>Survey {selectedSurvey?.id}</Dialog.Title>
            <Dialog.Content
              style={{ height: windowHeight * 0.5, width: windowWidth * 0.9 }}
            >
              <FlashList
                data={Object.entries(selectedSurvey?.responses || {}).filter(
                  ([question, response]) =>
                    !(Array.isArray(response) && response.length === 0)
                )}
                renderItem={({ item, index }) => {
                  const questionID = item[0];
                  const response = item[1];
                  const originalQuestion = selectedSurvey?.originalQuestions[String(questionID)];

                  return (
                    <View key={index} style={{ margin: 10 }}>
                      <Text>
                        Question {originalQuestion?.number}: {originalQuestion?.question}
                      </Text>
                      <Text>
                        Response:{" "}
                        {Array.isArray(response) ? response.join(", ") : response}
                      </Text>
                      <Text>
                        Question ID: {questionID}
                      </Text>
                    </View>
                  );
                }}
                estimatedItemSize={50}
              />
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={() => setVisible(false)}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </View>
  );
};

export default PreparedSurvScreen;
