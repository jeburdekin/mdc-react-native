import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from "react-native";
import {
  Button,
  IconButton,
  Text,
  useTheme,
} from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import Papa from "papaparse";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Text_Q,
  ageGroup_Q,
  YesNo_Q,
  HighLowVery_Q,
  YesNoDKRef_Q,
  YesNODKRef2_Q,
  D_M_DK_Ref_Q,
  M_H_D_DK_Ref_Q,
  H_D_DK_Ref_Q,
  H_D_M_DK_Q,
  M_H_M_DK_Q,
  M_H_D_DK_Q,
  select_2_Q,
  select_18_Q,
  select_19_Q,
  select_23_Q,
  select_25_Q,
  select_32_Q,
  select_58_Q,
  select_63_Q,
  select_64_Q,
  select_80_Q,
  select_100_Q,
  select_103_Q,
  select_135_Q,
  select_208_Q,
  select_221_Q,
  select_299_Q,
  select_306_Q,
  select_322_Q,
  select_500_Q,
  select_501_Q,
  select_502_Q,
  select_510_Q,
  select_512_Q,
  select_511_Q,
  select_520_Q,
  select_530_Q,
  select_531_Q,
  select_532_Q,
  select_533_Q,
  select_534_Q,
  select_535_Q,
  confirm_Q,
  Today_Q,
  Start_Q,
  IntegerInput,
  DateQuestionType,
  Units_Q,
  UnitsSC_Q,
  Units2_Q,
  Units3_Q,
  Units1_Q,
  Units4_Q,
  Units5_Q,
  Audio_Q,
} from "../Logic Files/QuestionTypes";

const questionsPerPage = [12, 7, 6, 8, 2]; // Define your own values here
const pageSize = 5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffcf7",
  },
});

const questionTypeComponents = {
  text: Text_Q,
  Text: Text_Q,
  note: Text_Q,
//  audio: Audio_Q,
  date: DateQuestionType,
  today: Today_Q,
  start: Start_Q,
  units: Units_Q,
  unitssc: UnitsSC_Q,
  units_1: Units1_Q,
  units_2: Units2_Q,
  units_3: Units3_Q,
  units_4: Units4_Q,
  units_5: Units5_Q,
  integer: IntegerInput,
  age_group: ageGroup_Q,
  YES_NO: YesNo_Q,
  HIGH_LOW_VERY: HighLowVery_Q,
  YES_NO_REF: YesNoDKRef_Q,
  YES_NO_DK_REF: YesNoDKRef_Q,
  YesNODKRef2: YesNODKRef2_Q,
  D_M_DK_REF: D_M_DK_Ref_Q,
  M_H_D_DK_REF: M_H_D_DK_Ref_Q,
  H_D_DK_REF: H_D_DK_Ref_Q,
  H_D_M_DK: H_D_M_DK_Q,
  M_H_M_DK: M_H_M_DK_Q,
  M_H_D_DK: M_H_D_DK_Q,
  select_2: select_2_Q,
  select_18: select_18_Q,
  select_19: select_19_Q,
  select_23: select_23_Q,
  select_25: select_25_Q,
  select_32: select_32_Q,
  select_58: select_58_Q,
  select_63: select_63_Q,
  select_64: select_64_Q,
  select_80: select_80_Q,
  select_100: select_100_Q,
  select_103: select_103_Q,
  select_135: select_135_Q,
  select_208: select_208_Q,
  select_221: select_221_Q,
  select_299: select_299_Q,
  select_306: select_306_Q,
  select_322: select_322_Q,
  select_500: select_500_Q,
  select_501: select_501_Q,
  select_502: select_502_Q,
  select_510: select_510_Q,
  select_512: select_512_Q,
  select_511: select_511_Q,
  select_520: select_520_Q,
  select_530: select_530_Q,
  select_531: select_531_Q,
  select_532: select_532_Q,
  select_533: select_533_Q,
  select_534: select_534_Q,
  select_535: select_535_Q,
  confirm: confirm_Q,
};

export default function SurveyScreen({ navigation }) {
  const { control, handleSubmit } = useForm();
  const [currentPage, setCurrentPage] = useState(1);
  const [questions, setQuestions] = useState([]);
  const [questionsPerPage, setQuestionsPerPage] = useState([]);
  const { colors } = useTheme();
  const [responses, setResponses] = useState({});
  const [startTime, setStartTime] = useState(new Date());
  const [shownTip, setShownTip] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [groupShowConditions, setGroupShowConditions] = useState({});


  const evaluateShowCondition = (showCondition) => {
      // Split the showCondition string into individual conditions
      const conditions = showCondition.split(',');

      // Evaluate each condition
      for (const condition of conditions) {
          // Check if the condition contains 'not'
          const isNotCondition = condition.includes('not');

          // Split the condition into the question ID and the expected response
          const [questionID, expectedResponses] = condition.split(isNotCondition ? 'not' : '=');

          // Trim any leading or trailing whitespace
          const trimmedQuestionID = questionID.trim();

          // Split the expected responses by 'or' and trim any leading or trailing whitespace
          const trimmedExpectedResponses = expectedResponses.split('or').map(response => response.trim());

          // Check if the actual response is included in the array of expected responses
          const actualResponse = String(responses[trimmedQuestionID]);
          const responseIncluded = actualResponse !== undefined && actualResponse !== null && trimmedExpectedResponses.includes(actualResponse);

          // If it's a 'not' condition and the response is included, or if it's a normal condition and the response is not included, return false
          if ((isNotCondition && responseIncluded) || (!isNotCondition && !responseIncluded)) {
            return false;
          }
      }

      // If all conditions are met, return true
      return true;
  };

  const evaluateGroupShowCondition = (groupNames) => {
    // Split the groupNames string into individual group names
    const groups = groupNames.split(',');
    // Evaluate each group
    for (const group of groups) {
      // Get the show condition for this group
      const showCondition = groupShowConditions[group.trim()];
      // If there is a show condition for this group, evaluate it
      if (showCondition) {
        const show = evaluateShowCondition(showCondition);
        // If the show condition is not met, return false
        if (!show) {
          return false;
        }
      } else {
        // If there is no show condition for this group, return false
        return false;
      }
    }
    // If all group show conditions are met, return true
    return true;
  };

  useEffect(() => {
    if (!startTime) {
      setStartTime(new Date());
    }
    const fetchAndParseCSV = async () => {
      try {
        setIsLoading(true); // Set loading to true before starting the fetch operation
        const storage = getStorage();
        const storageRef = ref(
          storage,
          "gs://mdc-app-proto.appspot.com/Interviewer Questions.csv"
        );
        const url = await getDownloadURL(storageRef);
        const response = await fetch(url);
        const fileContent = await response.text();
        Papa.parse(fileContent, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            if (results.errors.length > 0) {
              console.error("Errors while parsing CSV data:", results.errors);
              return;
            }

            const groupShowConditions = {};
            const questions = results.data.map((row) => {
              // Parse the group show conditions
              const groupShowCondition = row["Group Show Condition"];
              if (groupShowCondition) {
                const [groupName, showCondition] = groupShowCondition.split(":");
                groupShowConditions[groupName.trim()] = showCondition.trim();
              }

              return {
                order: row["Order"],
                questionID: row["Question ID"],
                questionType: row["Question Type"],
                details: row["Details"],
                showCondition: row["Individual Show Condition"],
                questionGroups: row["Question Group(s)"],
                tip: row["Tip"],
                response: "",
              };
            });
            setQuestions(questions);
            setGroupShowConditions(groupShowConditions);

            // Replace the existing logic for setting the questionsPerPage state variable with the new logic
            // Create a new array of questions that should be rendered based on their showCondition
            const renderedQuestions = questions.filter((question) => {
              // If the question has a showCondition, evaluate it
              if (question.showCondition && !evaluateShowCondition(question.showCondition)) {
                return false;
              }
              // If the question has a group or groups, evaluate the group show conditions
              if (question.questionGroups && !evaluateGroupShowCondition(question.questionGroups)) {
                return false;
              }
              // If the question does not have a showCondition or group(s), render it
              return true;
            });

            // Adjust the questionsPerPage state variable based on the new array of questions
            const pageSizes = Array(Math.ceil(renderedQuestions.length / pageSize)).fill(pageSize);
            pageSizes[pageSizes.length - 1] = renderedQuestions.length % pageSize || pageSize;
            setQuestionsPerPage(pageSizes);
          },
        });
        setIsLoading(false); // Set loading to false after the fetch operation is complete
      } catch (error) {
        console.error("Error fetching and parsing CSV data:", error);
        setIsLoading(false); // Set loading to false even if there was an error
      }
    };
    fetchAndParseCSV();
  }, []);

  // Calculate the range of questions on the current page
  const startQuestion = questionsPerPage
    .slice(0, currentPage - 1)
    .reduce((a, b) => a + b, 0);
  const endQuestion = startQuestion + questionsPerPage[currentPage - 1];

    // Generate a unique key for the survey
  const [surveyKey, setSurveyKey] = useState(null);
  useEffect(() => {
    const generateSurveyKey = async () => {
      let key = await AsyncStorage.getItem('surveyKey');
      if (key === null) {
        key = `surveyData-${Date.now()}`;
        await AsyncStorage.setItem('surveyKey', key);
      }
      setSurveyKey(key);
    };
    generateSurveyKey();
  }, []);

  // Save survey data when the user navigates away
  useEffect(() => {
    return navigation.addListener('beforeRemove', async () => {
      if (surveyKey !== null) {
        const surveyData = {
          currentPage,
          responses,
          startTime,
        };
        await AsyncStorage.setItem(surveyKey, JSON.stringify(surveyData));
      }
    });
  }, [navigation, currentPage, responses, startTime, surveyKey]);

  // Load survey data when the screen is focused
  useEffect(() => {
    const loadSurveyData = async () => {
      if (surveyKey !== null) {
        const surveyData = await AsyncStorage.getItem(surveyKey);
        if (surveyData !== null) {
          const { currentPage, responses, startTime } = JSON.parse(surveyData);
          setCurrentPage(currentPage);
          setResponses(responses);
          setStartTime(new Date(startTime));
        }
      }
    };
    if (surveyKey !== null) {
      loadSurveyData();
    }
    const unsubscribe = navigation.addListener('focus', loadSurveyData);
    return unsubscribe;
  }, [navigation, surveyKey]);

  // Remove survey data when the survey is completed
  const onSubmit = async () => {
    // Check if all questions on the current page have been answered
    const allAnswered = questions
      .slice(startQuestion, endQuestion)
      .every((question) => responses[question.questionID] !== null && responses[question.questionID] !== undefined);
    if (allAnswered) {
      let nextPage = currentPage + 1;
      if (nextPage <= questionsPerPage.length) {
        setCurrentPage(nextPage);
      } else {
        console.log(responses); // or any other final submission logic
        await AsyncStorage.removeItem(surveyKey); // Remove survey data
      }
    } else {
      alert("Please answer all questions before proceeding.");
    }
  };

  // Initialize the responses
  useEffect(() => {
    const initialResponses = questions.reduce((acc, question) => {
      // Check if there's already a saved response for this question
      const savedResponse = responses[question.questionID];
      // If there is, use that response. If there isn't, initialize it as an empty array
      acc[question.questionID] = savedResponse !== undefined ? savedResponse : [];
      return acc;
    }, {});
    console.log(responses)
    setResponses(initialResponses);
  }, [questions]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", backgroundColor: "#fffcf7", alignItems: "center" }}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 20 : 0}
      style={{ flex: 1 }}
    >
      <ScrollView style={styles.container}>
        {questions
          .filter((question) => {
            // If the question has a showCondition, evaluate it
            if (question.showCondition) {
              if(question.groupShowCondition) {
                return evaluateShowCondition(question.showCondition) && evaluateGroupShowCondition(question.groupShowCondition);
              }
              return evaluateShowCondition(question.showCondition);
            }
            // If the question does not have a showCondition, render it
            return true;
          })
          .slice(startQuestion, endQuestion)
          .map((question, index) => {
          const QuestionComponent = questionTypeComponents[question.questionType];
          return (
            <View style={{ marginTop: 10, alignContent: "center" }} key={index}>
              <View
                style={{
                  borderBottomColor: colors.primary,
                  borderBottomWidth: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                }}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center', flexShrink: 1 }}>
                <Text
                  style={{
                    marginBottom: 10,
                    paddingLeft: 10,
                    textAlign: "auto",
                    marginRight: 3,
                    fontWeight: "bold",
                    flexShrink: 1,
                    flex: 1,
                  }}
                >
                  {`Question ${question.order}: ${question.details}`}
                </Text>
                {question.tip && (
                  <IconButton
                    icon="information"
                    color={colors.primary}
                    size={20}
                    onPress={() => setShownTip(shownTip === question.tip ? null : question.tip)}
                  />
                )}
                </View>
              </View>
              {shownTip === question.tip && (
                <Text style={{ fontStyle: 'italic', color: colors.secondary, paddingLeft: 10, paddingRight: 10, paddingTop: 5, paddingBottom: 5 }}>
                  {question.tip}
                </Text>
              )}
              {QuestionComponent ? (
                <>
                {question.questionType === 'start' && <Start_Q startTime={startTime} />}
                <QuestionComponent
                  onChange={(newValue) => {
                    setResponses((prevResponses) => ({
                      ...prevResponses,
                      [question.questionID]: Array.isArray(newValue) ? newValue : [newValue],
                    }));
                  }}
                  // Ensure that the value is always an array
                  value={Array.isArray(responses[question.questionID]) ? responses[question.questionID] : [responses[question.questionID]]}
                />
                </>
              ) : (
                <Text>Unsupported question type: {question.questionType}</Text>
              )}
            </View>
          );
        })}
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
          padding: 5,
          paddingLeft: 10,
          paddingRight: 10,
          justifyContent: "space-between",
        }}
      >
        {currentPage === 1 && (
          <Button
            mode="elevated"
            style={{ margin: 10 }}
            onPress={() => {
              navigation.navigate("Draft Screen")
            }}
          >
            Home
          </Button>
        )}
        {currentPage > 1 && (
          <Button
            mode="elevated"
            style={{ margin: 10 }}
            onPress={() => {
              setCurrentPage(currentPage - 1);
            }}
          >
            Back
          </Button>
        )}
        <Button
          mode="elevated"
          style={{ margin: 10 }}
          onPress={handleSubmit(onSubmit)}
        >
          {currentPage < questionsPerPage.length ? "Next" : "Submit"}
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
}
