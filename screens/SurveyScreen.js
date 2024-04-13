


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
import { View, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';

export default function SurveyScreen() {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const [currentPage, setCurrentPage] = useState(1);

  const onSubmit = (values) => {
    if (currentPage === 1) {
      setCurrentPage(2);
    } else {
      console.log(values);
    }
  };

  return (
    <View>
      {currentPage === 1 && (
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="Question 1"
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
          name="question1"
          defaultValue=""
        />
      )}

      {currentPage === 2 && (
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="Question 2"
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
          name="question2"
          defaultValue=""
        />
      )}

      <Button onPress={handleSubmit(onSubmit)}>
        {currentPage === 1 ? 'Next' : 'Submit'}
      </Button>
    </View>
  );
}
