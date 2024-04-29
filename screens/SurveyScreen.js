import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import {
  Button,
  TextInput,
  RadioButton,
  Text,
  useTheme,
} from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import Papa from "papaparse";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
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
  today: Today_Q,
  start: Start_Q,
  integer: IntegerInput,
  ageGroup: ageGroup_Q,
  YES_NO: YesNo_Q,
  HIGH_LOW_VERY: HighLowVery_Q,
  YES_NO_REF: YesNoDKRef_Q,
  YES_NO_DK_REF: YesNoDKRef_Q,
  YesNODKRef2: YesNODKRef2_Q,
  D_M_DK_Ref: D_M_DK_Ref_Q,
  M_H_D_DK_Ref: M_H_D_DK_Ref_Q,
  H_D_DK_Ref: H_D_DK_Ref_Q,
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

export default function SurveyScreen() {
  const { control, handleSubmit } = useForm();
  const [currentPage, setCurrentPage] = useState(1);
  const [questions, setQuestions] = useState([]);
  const [questionsPerPage, setQuestionsPerPage] = useState([]);
  const { colors } = useTheme();
  const [responses, setResponses] = useState({});
  useEffect(() => {
    const fetchAndParseCSV = async () => {
      try {
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

            const questions = results.data.map((row) => ({
              order: row["Order"],
              questionID: row["Question ID"],
              questionType: row["Question Type"],
              details: row["Details"],
              response: "",
            }));
            setQuestions(questions);

            const pageSizes = Array(
              Math.ceil(questions.length / pageSize)
            ).fill(pageSize);
            pageSizes[pageSizes.length - 1] =
              questions.length % pageSize || pageSize;
            setQuestionsPerPage(pageSizes);
          },
        });
      } catch (error) {
        console.error("Error fetching and parsing CSV data:", error);
      }
    };

    fetchAndParseCSV();
  }, []);

  // Calculate the range of questions on the current page
  const startQuestion = questionsPerPage
    .slice(0, currentPage - 1)
    .reduce((a, b) => a + b, 0);
  const endQuestion = startQuestion + questionsPerPage[currentPage - 1];
  const onSubmit = () => {
    // Check if all questions on the current page have been answered
    const allAnswered = questions
      .slice(startQuestion, endQuestion)
      .every((question) => responses[question.questionID] !== null && responses[question.questionID] !== undefined);

    if (allAnswered) {
      if (currentPage < questionsPerPage.length) {
        setCurrentPage(currentPage + 1);
      } else {
        console.log(responses); // or any other final submission logic
      }
    } else {
      alert("Please answer all questions before proceeding.");
    }
  };

  useEffect(() => {
    const initialResponses = questions.reduce((acc, question) => {
      acc[question.questionID] = "";
      return acc;
    }, {});
    setResponses(initialResponses);
  }, [questions]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 20 : 0}
      style={{ flex: 1 }}
    >
      <ScrollView style={styles.container}>
        {questions.slice(startQuestion, endQuestion).map((question, index) => {
          const QuestionComponent =
            questionTypeComponents[question.questionType];
          return (
            <View style={{ marginTop: 10, alignContent: "center" }} key={index}>
              <View
                style={{
                  borderBottomColor: colors.primary,
                  borderBottomWidth: 1,
                }}
              >
                <Text
                  style={{
                    marginBottom: 10,
                    paddingLeft: 10,
                    textAlign: "auto",
                    marginRight: 3,
                    fontWeight: "bold",
                  }}
                >
                  {`Question ${question.order}: ${question.details}`}
                </Text>
              </View>
              {QuestionComponent ? (
                <QuestionComponent
                  onChange={(newValue) => {
                    setResponses((prevResponses) => ({
                      ...prevResponses,
                      [question.questionID]: newValue,
                    }));
                  }}
                  value={responses[question.questionID]}
                />
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
          justifyContent: currentPage === 1 ? "flex-end" : "space-between",
        }}
      >
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
