


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#fffcf7",
//   },
//   input: {
//     height: 40,
//     width: 250,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//     backgroundColor: "white",
//   },
//   button: {
//     backgroundColor: '#D9695F',
//     width: 175,
//     padding: 12,
//     borderRadius: 10,
//     marginTop: 15,
//   },
//   buttonText: {
//     textAlign: "center",
//     color: "#fffcf7",
//     fontSize: 20,
//   },
// });

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

import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';

const questions = [
  { label: 'Question 1', name: 'question1' },
  { label: 'Question 2', name: 'question2' },
  { label: 'Question 3', name: 'question3'},
  { label: 'Question 4', name: 'question4'},
  { label: 'Question 5', name: 'question5'},
  { label: 'Question 6', name: 'question6'},
  { label: 'Question 7', name: 'question7'},
  { label: 'Question 8', name: 'question8'},
  { label: 'Question 9', name: 'question9'},
  { label: 'Question 10', name: 'question10'},
  // Add more questions here
];

const questionsPerPage = [3, 5, 2]; // Define your own values here

export default function SurveyScreen() {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const [currentPage, setCurrentPage] = useState(1);

  const onSubmit = (values) => {
    if (currentPage < questionsPerPage.length) {
      setCurrentPage(currentPage + 1);
    } else {
      console.log(values);
    }
  };

  const startQuestion = questionsPerPage.slice(0, currentPage - 1).reduce((a, b) => a + b, 0);
  const endQuestion = startQuestion + questionsPerPage[currentPage - 1];

  return (
    <View>
      {questions.slice(startQuestion, endQuestion).map((question, index) => (
        <Controller
          key={index}
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label={question.label}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
          name={question.name}
          defaultValue=""
        />
      ))}
      <Button onPress={handleSubmit(onSubmit)}>
        {currentPage < questionsPerPage.length ? 'Next' : 'Submit'}
      </Button>
    </View>
  );
}
