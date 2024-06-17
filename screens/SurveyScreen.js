import React, {
  useEffect,
  useState,
  useRef,
  useMemo,
  useCallback,
  useReducer,
} from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { Button, IconButton, Text, useTheme } from "react-native-paper";
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
import BottomSheet from "@gorhom/bottom-sheet";
import { FlashList } from "@shopify/flash-list";
import { setSurveyCompleted } from "../Redux/Actions";
import { useDispatch } from 'react-redux';
// const questionsPerPage = [12, 7, 6, 8, 2]; // Define your own values here
const pageSize = 5;

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

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

// State variables n stuff
const initialState = {
  currentPage: 1,
  questions: [],
  questionsPerPage: [],
  startTime: new Date(),
  shownTip: null,
  isLoading: true,
  groupShowConditions: {},
  surveyKey: null,
  filteredQuestions: [],
  responses: {},

};

function reducer(state, action) {
  switch (action.type) {
    case "SET_CURRENT_PAGE":
      return { ...state, currentPage: action.payload };
    case "SET_QUESTIONS":
      return { ...state, questions: action.payload };
    case "SET_QUESTIONS_PER_PAGE":
      return { ...state, questionsPerPage: action.payload };
    case "SET_START_TIME":
      return { ...state, startTime: action.payload };
    case "SET_SHOWN_TIP":
      return { ...state, shownTip: action.payload };
    case "SET_IS_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_GROUP_SHOW_CONDITIONS":
      return { ...state, groupShowConditions: action.payload };
    case "SET_SURVEY_KEY":
      return { ...state, surveyKey: action.payload };
    case "SET_FILTERED_QUESTIONS":
      return { ...state, filteredQuestions: action.payload };
    case "SET_RESPONSES":
      return { ...state, responses: action.payload };
    // Extra handlers go here for whoever reads this in the future
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

export default function SurveyScreen({ navigation }) {
  //Redux stuff for mainting question and response state
  const [state, dispatch] = useReducer(reducer, initialState);
  const bottomSheetRef = useRef(null);
  const { control, handleSubmit } = useForm();
  const { colors } = useTheme();
  const scrollViewRef = useRef(null);
  const flashListRef = useRef(null);
  const questionRefs = useRef([]);
  const dispatcher = useDispatch();

  const {
    currentPage,
    questions,
    questionsPerPage,
    startTime,
    shownTip,
    isLoading,
    groupShowConditions,
    surveyKey,
    filteredQuestions,
    responses,
  } = state;

  // Bottom sheet stuff
  const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);
  // const handleSheetChange = useCallback((index) => {
  //   console.log("handleSheetChange", index);
  // }, []);
  const handleSnapPress = useCallback((index) => {
    bottomSheetRef.current?.snapToIndex(index);
  }, []);
  const handleClosePress = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  useEffect(() => {
    const newFilteredQuestions = questions.filter((question) => {
      // If the question has a showCondition, evaluate it
      if (
        question.showCondition &&
        !evaluateShowCondition(question.showCondition)
      ) {
        return false;
      }
      // If the question has a group or groups, evaluate the group show conditions
      if (
        question.questionGroups &&
        !evaluateGroupShowCondition(question.questionGroups)
      ) {
        return false;
      }
      // If the question does not have a showCondition or group(s), render it
      return true;
    });
    dispatch({ type: "SET_FILTERED_QUESTIONS", payload: newFilteredQuestions });

    // Calculate the number of pages based on the number of visible questions
    const numberOfPages = Math.ceil(newFilteredQuestions.length / pageSize);

    // Update the state
    dispatch({
      type: "SET_QUESTIONS_PER_PAGE",
      payload: Array(numberOfPages).fill(pageSize),
    });
  }, [questions, responses]);

  const evaluateShowCondition = (showCondition) => {
    // Check if the show condition is complex
    if (showCondition.includes('(') && showCondition.includes(')')) {
      return evaluateComplexCondition(showCondition, responses);
    }

    // Split the showCondition string into individual conditions
    let conditions;
    if (showCondition.includes('(')) {
      conditions = [showCondition];
    } else {
      conditions = showCondition.split(",");
    }

    // Evaluate each condition
    for (const condition of conditions) {
      // Check if the condition contains 'not'
      const isNotCondition = condition.includes("not");

      // Split the condition into the question ID and the expected response
      const [questionID, expectedResponses] = condition.split(
        isNotCondition ? "not" : "="
      );

      // Trim any leading or trailing whitespace
      const trimmedQuestionID = questionID.trim();
      // Split the expected responses by 'or' and trim any leading or trailing whitespace
      const trimmedExpectedResponses = expectedResponses
        .split("or")
        .map((response) => response.trim());

      // Check if the actual response is included in the array of expected responses
      const actualResponse = String(responses[trimmedQuestionID]);
      const responseIncluded =
        actualResponse !== undefined &&
        actualResponse !== null &&
        trimmedExpectedResponses.includes(actualResponse);

      // If it's a 'not' condition and the response is included, or if it's a normal condition and the response is not included, return false
      if (
        (isNotCondition && responseIncluded) ||
        (!isNotCondition && !responseIncluded)
      ) {
        return false;
      }
    }

    // If all conditions are met, return true
    return true;
  };

  const evaluateComplexCondition = (complexCondition, responses) => {
    // Use a regular expression to find all conditions within parentheses
    const regex = /\(([^)]+)\)/g;
    let match;
    let conditionResults = [];

    while ((match = regex.exec(complexCondition)) !== null) {
      const conditions = match[1].split(', ');
      let subConditionResults = [];

      for (let i = 0; i < conditions.length; i++) {
        const condition = conditions[i].trim();

        // Evaluate each condition using the existing function
        const result = evaluateShowCondition(condition, responses);
        subConditionResults.push(result);
      }

      // All conditions must be true
      const andResult = subConditionResults.every(result => result);
      conditionResults.push(andResult);
    }

    // If all conditions are met, return true
    const finalResult = conditionResults.every(result => result);
    return finalResult;
  };

  const evaluateGroupShowCondition = (groupNames) => {
    // Split the groupNames string into individual group names
    const groups = groupNames.split(",");
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
      }
    }
    // If all group show conditions are met, return true
    return true;
  };

  useEffect(() => {
    if (!startTime) {
      dispatch({ type: "SET_START_TIME", payload: new Date() });
    }
    const fetchAndParseCSV = async () => {
      try {
        // Set loading to true before starting the fetch operation
        dispatch({ type: "SET_IS_LOADING", payload: true });
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

            const tempGroupShowConditions = {};
            const tempQuestions = results.data.map((row) => {
              // Parse the group show conditions
              const groupShowCondition = row["Group Show Condition"];
              if (groupShowCondition) {
                const [groupName, showCondition] =
                  groupShowCondition.split(":");
                tempGroupShowConditions[groupName.trim()] = showCondition.trim();
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
            dispatch({ type: "SET_QUESTIONS", payload: tempQuestions });
            dispatch({
              type: "SET_GROUP_SHOW_CONDITIONS",
              payload: tempGroupShowConditions,
            });
          },
        });
        // Set loading to false after the fetch operation is complete
        dispatch({ type: "SET_IS_LOADING", payload: false });
      } catch (error) {
        console.error("Error fetching and parsing CSV data:", error);
        // Set loading to false even if there was an error
        dispatch({ type: "SET_IS_LOADING", payload: false });
      }
    };
    fetchAndParseCSV();
  }, []);

  // Calculate the range of questions on the current page
  const startQuestion = questionsPerPage
    .slice(0, currentPage - 1)
    .reduce((a, b) => a + b, 0);
  const endQuestion = startQuestion + questionsPerPage[currentPage - 1];

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: true });
    }
  }, [startQuestion, endQuestion]);

  useEffect(() => {
    const generateSurveyKey = async () => {
      let key = await AsyncStorage.getItem("surveyKey");
      if (key === null) {
        key = `surveyData-${Date.now()}`;
        await AsyncStorage.setItem("surveyKey", key);
      }
      dispatch({ type: "SET_SURVEY_KEY", payload: key });
    };
    generateSurveyKey();
  }, []);

  // Save survey data when the user navigates away
  useEffect(() => {
    return navigation.addListener("beforeRemove", async () => {
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
          dispatch({ type: "SET_CURRENT_PAGE", payload: currentPage });
          dispatch({ type: "SET_RESPONSES", payload: responses });
          dispatch({ type: "SET_START_TIME", payload: new Date(startTime) });
        }
      }
    };
    if (surveyKey !== null) {
      loadSurveyData();
    }
    const unsubscribe = navigation.addListener("focus", loadSurveyData);
    return unsubscribe;
  }, [navigation, surveyKey]);

  // Remove survey data when the survey is completed
  const onSubmit = async () => {
    let nextPage = currentPage + 1;
    if (nextPage < questionsPerPage.length) {
      dispatch({ type: "SET_CURRENT_PAGE", payload: nextPage });
    } else {
      console.log("Survey completed! It should now appear on the completed surveys screen.");
      dispatcher(setSurveyCompleted(surveyKey)); // replace `surveyId` with the actual id of the survey
      navigation.navigate("Ready to Send");
    }
  };
  // Initialize the responses
  useEffect(() => {
    const initialResponses = questions.reduce((acc, question) => {
      // Check if there's already a saved response for this question
      const savedResponse = responses[question.questionID];
      // If there is, use that response. If there isn't, initialize it as an empty array
      acc[question.questionID] =
        savedResponse !== undefined ? savedResponse : [];
      return acc;
    }, {});
    dispatch({ type: "SET_RESPONSES", payload: initialResponses });
  }, [questions]);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          backgroundColor: "#fffcf7",
          alignItems: "center",
        }}
      >
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
      <FlashList
        ref={flashListRef}
        estimatedItemSize={200}
        data={filteredQuestions.slice(startQuestion, endQuestion)}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item: question, index }) => {
          questionRefs.current[index] = React.createRef(); // Create a ref for the question
          const QuestionComponent =
            questionTypeComponents[question.questionType];
          return (
            <View
              ref={questionRefs.current[index]} // Assign the ref to the question
              style={{ marginTop: 10, alignContent: "center" }}
              key={index}
            >
              <View
                style={{
                  borderBottomColor: colors.primary,
                  borderBottomWidth: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    flexShrink: 1,
                  }}
                >
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
                      onPress={() =>
                        dispatch({
                          type: "SET_SHOWN_TIP",
                          payload: question.tip,
                        })
                      }
                    />
                  )}
                </View>
              </View>
              {shownTip === question.tip && (
                <Text
                  style={{
                    fontStyle: "italic",
                    color: colors.secondary,
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingTop: 5,
                    paddingBottom: 5,
                  }}
                >
                  {question.tip}
                </Text>
              )}
              {QuestionComponent ? (
                <>
                  {question.questionType === "start" && (
                    <Start_Q startTime={startTime} />
                  )}
                  <QuestionComponent
                    onChange={(newValue) => {
                      dispatch({
                        type: "SET_RESPONSES",
                        payload: {
                          ...responses,
                          [question.questionID]: Array.isArray(newValue)
                            ? newValue
                            : [newValue],
                        },
                      });
                    }}
                    // Ensure that the value is always an array
                    value={
                      Array.isArray(responses[question.questionID])
                        ? responses[question.questionID]
                        : [responses[question.questionID]]
                    }
                  />
                </>
              ) : (
                <Text>
                  Unsupported question type: {question.questionType}
                </Text>
              )}
            </View>
          );
        }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          margin: windowHeight * 0.025,
        }}
      >
        {currentPage === 1 && (
          <Button
            mode="elevated"
            style={{}}
            onPress={() => {
              navigation.navigate("Draft Screen");
            }}
          >
            Home
          </Button>
        )}
        {currentPage > 1 && (
          <Button
            mode="elevated"
            style={{}}
            onPress={() => {
              dispatch({ type: "SET_CURRENT_PAGE", payload: currentPage - 1 });
            }}
          >
            Back
          </Button>
        )}
        <Button
         onPress={() => handleSnapPress(2)}
         mode="contained-tonal"
          style={{}}
         >
          Progress
        </Button>
        <Button
          mode="elevated"
          style={{}}
          onPress={() => {
            if (currentPage < questionsPerPage.length) {
              const nextPage = currentPage + 1;
              dispatch({ type: "SET_CURRENT_PAGE", payload: nextPage });
              flashListRef.current?.scrollToOffset({
                offset: 0,
                animated: true,
              });
            } else {
              onSubmit();
            }
          }}
        >
          {currentPage < questionsPerPage.length ? "Next" : "Complete"}
        </Button>
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        index={-1}
        enablePanDownToClose={true}
        backgroundStyle={{
          backgroundColor: colors.primary,
        }}
      >
        <FlashList
          data={filteredQuestions}
          estimatedItemSize={400}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item: question, index }) => (
            <Button
              onPress={() => {
                const page = Math.ceil((index + 1) / pageSize);
                dispatch({ type: "SET_CURRENT_PAGE", payload: page });
                flashListRef.current.scrollToIndex({
                  index: index,
                  animated: true,
                  viewPosition: 0,
                });
                handleClosePress();
              }}
              style={{
                borderRadius: 10,
                borderWidth: windowHeight * 0.005,
                margin: windowHeight * 0.01,
                borderColor: responses[question.questionID].length > 0 ? '#a8ffb4' : '#ff9c9c',
              }}
            >
              <Text style={{color: 'white', fontWeight: "bold"}}>{`Question ${question.order}: ${question.details}`}</Text>
            </Button>
          )}
        />
      </BottomSheet>
    </KeyboardAvoidingView>
  );
}
