// export default function SurveyScreen({ navigation }) {
//   const survey = new Model(surveyJson);
//   return (
//     <View style={styles.container}>
//       <SafeAreaView style={{width: '100%', alignItems: "center"}}>

//       </SafeAreaView>
//     </View>
//   );
// }

// import { Button, TextInput } from 'react-native-paper';
// import { Formik } from 'formik';
// import * as Yup from 'yup';

// const validationSchema = Yup.object().shape({
//   question1: Yup.string().required('Required'),
//   question2: Yup.string().required('Required'),
// });

// export default function SurveyScreen({ navigation }) {
//   return (
//     <Formik
//       initialValues={{ question1: '', question2: '' }}
//       validationSchema={validationSchema}
//       onSubmit={(values) => console.log(values)}
//     >
//       {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
//         <View>
//           <TextInput
//             name="question1"
//             placeholder="Question 1"
//             onChangeText={handleChange('question1')}
//             onBlur={handleBlur('question1')}
//             value={values.question1}
//             error={errors.question1}
//           />
//           <TextInput
//             name="question2"
//             placeholder="Question 2"
//             onChangeText={handleChange('question2')}
//             onBlur={handleBlur('question2')}
//             value={values.question2}
//             error={errors.question2}
//           />
//           <Button onPress={handleSubmit}>Submit</Button>
//         </View>
//       )}
//     </Formik>
//   );
// }

import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Button, TextInput, RadioButton, Text, useTheme } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';
import Papa from 'papaparse';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const questionsPerPage = [3, 7, 6, 8, 2]; // Define your own values here

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffcf7",
  }
});

export default function SurveyScreen() {
  const { control, handleSubmit} = useForm();
  const [currentPage, setCurrentPage] = useState(1);
  const [questions, setQuestions] = useState([]);
  const { colors } = useTheme();

  useEffect(() => {
    const storage = getStorage();
    const storageRef = ref(storage, 'gs://mdc-app-proto.appspot.com/AutopsyQs.csv');

    getDownloadURL(storageRef)
      .then((url) => {
        fetch(url)
          .then(response => response.text())
          .then((fileContent) => {
            Papa.parse(fileContent, {
              header: true,
              complete: function(results) {
                const questions = results.data.map(row => ({
                  label: row["#"] + ": " + row["Details"],
                  name: row["#"],
                  questionType: row["Question Type"],
                  response: ""
                }));
                setQuestions(questions);
              }
            });
          });
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const onSubmit = () => {
    if (currentPage < questionsPerPage.length) {
      setCurrentPage(currentPage + 1);
    } else {
      console.log(questions);
    }
  };

  const startQuestion = questionsPerPage.slice(0, currentPage - 1).reduce((a, b) => a + b, 0);
  const endQuestion = startQuestion + questionsPerPage[currentPage - 1];

  return (
  <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    keyboardVerticalOffset={Platform.OS === "ios" ? 20 : 0}
    style={{ flex: 1}}
    >
    <ScrollView style={styles.container}>
      {questions.slice(startQuestion, endQuestion).map((question, index) => (
        <View style={{marginTop: 10, alignContent: "center"}} key={index}>
        <Text style={{marginBottom: 10, paddingLeft: 10, textAlign:'auto', marginRight: 3}}>{question.label}</Text>
        {question.questionType === 'Yes or No' ? (
          <RadioButton.Group
            onValueChange={newValue => {
              setQuestions(prevQuestions =>
                prevQuestions.map(q =>
                  q.name === question.name ? { ...q, response: newValue } : q
                )
              );
            }}
            value={question.response}
          >
            <RadioButton.Item
              label="Yes"
              value="Yes"
              style={{borderTopWidth: 1, borderColor: colors.primary}}
            />
            <RadioButton.Item
              label="No"
              value="No"
              style={{borderTopWidth: 1, borderBottomWidth: 1, borderColor: colors.primary}}
            />
          </RadioButton.Group>
        ) : (
          <Controller
            control={control}
            render={({ field: { onChange, onBlur } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={text => {
                  onChange(text);
                  question.response = text;
                }}
                value={question.response}
              />
            )}
            name={question.name}
          />
        )}
      </View>
    ))}
    </ScrollView>
    <View style={{ flexDirection: 'row', padding: 5, paddingLeft:10, paddingRight:10, justifyContent: 'space-between' }}>
      <Button mode="elevated" style={{margin:10}} onPress={() => {
        if (currentPage > 1) {
          setCurrentPage(currentPage - 1);
        }
      }}>
        Back
      </Button>
      <Button mode="elevated" style={{margin:10}} onPress={handleSubmit(onSubmit)}>
        {currentPage < questionsPerPage.length ? 'Next' : 'Submit'}
      </Button>
    </View>
  </KeyboardAvoidingView>
  );
}
