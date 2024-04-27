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

const questionsPerPage = [12, 7, 6, 8, 2]; // Define your own values here
const pageSize = 5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffcf7",
  },
});

export default function SurveyScreen() {
  const { control, handleSubmit } = useForm();
  const [currentPage, setCurrentPage] = useState(1);
  const [questions, setQuestions] = useState([]);
  const [questionsPerPage, setQuestionsPerPage] = useState([]);
  const { colors } = useTheme();

  useEffect(() => {
    const storage = getStorage();
    const storageRef = ref(
      storage,
      "gs://mdc-app-proto.appspot.com/AutopsyQuestionsFinal.csv"
    );

    getDownloadURL(storageRef)
      .then((url) => {
        fetch(url)
          .then((response) => response.text())
          .then((fileContent) => {
            Papa.parse(fileContent, {
              header: true,
              complete: function (results) {
                const questions = results.data.map((row) => ({
                  label: row["#"] + ": " + row["Details"],
                  id: row["Question ID"],
                  questionType: row["Question Type"],
                  response: "",
                }));
                setQuestions(questions);

                // Generate the page sizes based on the total number of questions
                const pageSizes = [];
                let totalQuestions = questions.length;
                while (totalQuestions > 0) {
                  if (totalQuestions >= pageSize) {
                    pageSizes.push(pageSize);
                    totalQuestions -= pageSize;
                  } else {
                    pageSizes.push(totalQuestions);
                    totalQuestions = 0;
                  }
                }
                setQuestionsPerPage(pageSizes);
              },
            });
          });
      })
      .catch((err) => {
        console.error(err);
      });
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
      .every((question) => question.response.trim() !== "");

    if (allAnswered) {
      if (currentPage < questionsPerPage.length) {
        setCurrentPage(currentPage + 1);
      } else {
        console.log(questions); // or any other final submission logic
      }
    } else {
      alert("Please answer all questions before proceeding.");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 20 : 0}
      style={{ flex: 1 }}
    >
      <ScrollView style={styles.container}>
        {questions.slice(startQuestion, endQuestion).map((question, index) => (
          <View style={{ marginTop: 10, alignContent: "center" }} key={index}>
            <Text
              style={{
                marginBottom: 10,
                paddingLeft: 10,
                textAlign: "auto",
                marginRight: 3,
              }}
            >
              {question.label}
            </Text>
            {question.questionType === "Y/N" ? (
              <RadioButton.Group
                onValueChange={(newValue) => {
                  setQuestions((prevQuestions) =>
                    prevQuestions.map((q) =>
                      q.id === question.id ? { ...q, response: newValue } : q
                    )
                  );
                }}
                value={question.response}
              >
                <RadioButton.Item
                  label="Yes"
                  value="Yes"
                  style={{ borderTopWidth: 1, borderColor: colors.primary }}
                />
                <RadioButton.Item
                  label="No"
                  value="No"
                  style={{
                    borderTopWidth: 1,
                    borderBottomWidth: 1,
                    borderColor: colors.primary,
                  }}
                />
              </RadioButton.Group>
            ) : (
              <Controller
                control={control}
                render={({ field: { onChange, onBlur } }) => (
                  <TextInput
                    onBlur={onBlur}
                    mode="flat"
                    label="Response"
                    onChangeText={(text) => {
                      onChange(text);
                      question.response = text;
                    }}
                    value={question.response}
                  />
                )}
                name={question.id}
              />
            )}
          </View>
        ))}
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
