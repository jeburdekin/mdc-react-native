import React, { useState, useEffect } from "react";
import {
  RadioButton,
  Checkbox,
  Button,
  TextInput,
  Text,
  useTheme,
} from "react-native-paper";
import { View, StyleSheet, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import AudioRecorderPlayer from 'react-native-audio-recorder-player';


const useMyStyles = () => {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    radioButtonGroup: {
      borderBottomWidth: 1,
      borderBottomColor: colors.primary,
    },
    radioButton: {
      borderWidth: 1,
      borderColor: colors.primary, // semi-transparent border
      borderRadius: 5, // rounded corners
      padding: 5, // some padding
      margin: 5, // some margin
    },
    datePicker: {
      borderWidth: 1,
      borderColor: colors.primary, // semi-transparent border
      borderRadius: 5, // rounded corners
      padding: 5, // some padding
      margin: 5, // some margin
      alignSelf: "center",
    },
    checkBoxes: {
      borderWidth: 1,
      borderRadius: 7,
      margin: 3,
      borderColor: colors.primary,
    },
  });

  return styles;
};

const CustomRadioButton = ({ label, value, status, onPress }) => {
  const styles = useMyStyles();
  return (
    <View style={styles.radioButton}>
      <RadioButton.Item
        label={label}
        value={value}
        status={status}
        onPress={onPress}
      />
    </View>
  );
};

// Define reusable component for question types
const QuestionType = ({ value, onChange, options }) => {
  const styles = useMyStyles();
  return (
    <RadioButton.Group
      style={styles.radioButtonGroup}
      onValueChange={onChange}
      value={value}
    >
      {options.map((option, index) => (
        <CustomRadioButton
          key={index} // Use the index as a key
          label={option}
          value={option}
        />
      ))}
    </RadioButton.Group>
  );
};

const CheckboxQuestionType = ({ value, handleCheck, options, styles }) => {
  return (
    <View style={styles}>
      {options.map((option) => (
        <Checkbox.Item
          key={option}
          label={option}
          status={value.includes(option) ? 'checked' : 'unchecked'}
          onPress={() => handleCheck(option)}
        />
      ))}
    </View>
  );
};

export const Text_Q = ({ onChange, value }) => (
  <TextInput value={value} onChangeText={onChange} />
);

// export const Audio_Q = () => {
//   const [isRecording, setIsRecording] = useState(false);
//   const audioRecorderPlayer = new AudioRecorderPlayer();
//   const styles = useMyStyles();

//   const onStartRecord = async () => {
//     const result = await audioRecorderPlayer.startRecorder();
//     audioRecorderPlayer.addRecordBackListener((e) => {
//       return;
//     });
//     setIsRecording(true);
//     console.log(result);
//   };

//   const onStopRecord = async () => {
//     const result = await audioRecorderPlayer.stopRecorder();
//     audioRecorderPlayer.removeRecordBackListener();
//     setIsRecording(false);
//     console.log(result);
//   };

//   return (
//     <View>
//       <Button
//       title={isRecording ? 'Stop Recording' : 'Start Recording'}
//       onPress={isRecording ? onStopRecord : onStartRecord}
//       style={styles.radioButton}/>
//     </View>
//   );
// };

export const DateQuestionType = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const styles = useMyStyles();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios"); // hide the picker on Android after selection
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <View style={styles.datePicker}>
      <Button onPress={showDatepicker} title="Show date picker!" />
      {show && <DateTimePicker value={date} onChange={onChange} />}
      <Text>{date.toString()}</Text>
    </View>
  );
};

// Define other question types here...
export const ageGroup_Q = ({ value, onChange }) => (
  <QuestionType
    value={value}
    onChange={onChange}
    options={[
      { label: "Neonate", value: "Neonate" },
      { label: "Child", value: "Child" },
      { label: "Adult", value: "Adult" },
    ]}
  />
);

export const IntegerInput = () => {
  const [value, setValue] = useState("");

  const handleTextChange = (text) => {
    // Check if the input is an integer
    if (/^\d+$/.test(text) || text === "") {
      setValue(text);
    }
  };

  return (
    <TextInput
      label="Integer Input"
      value={value}
      onChangeText={handleTextChange}
      keyboardType="numeric"
    />
  );
};
export const Today_Q = () => {
  const today = new Date();
  const dateString = `${today.getFullYear()}-${
    today.getMonth() + 1
  }-${today.getDate()}`;

  return (
    <Text style={{ fontWeight: "bold", textAlign: "center" }}>
      {dateString}
    </Text>
  );
};

export const Start_Q = ({ startTime }) => {
  const timeString = startTime
    ? `${startTime.getHours()}:${startTime.getMinutes()}:${startTime.getSeconds()}`
    : "";

  return (
    <Text style={{ fontWeight: "bold", textAlign: "center" }}>
      {timeString}
    </Text>
  );
};

export const YesNo_Q = ({ onChange, value }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={["Yes", "No"]} // Pass an array of strings instead of an array of objects
    />
  );
};



export const select_510_Q = ({ value, onChange }) => {
  const handleCheck = (choiceValue) => {
    const newValue = [...(value || [])];
    if (newValue.includes(choiceValue)) {
      const index = newValue.indexOf(choiceValue);
      newValue.splice(index, 1);
    } else {
      newValue.push(choiceValue);
    }
    onChange(newValue);
  };

  const styles = useMyStyles();
  const choices = [
    "Chronic kidney disease",
    "Dialysis",
    "Fever",
    "Heart attack",
    "Heart problem",
    "Jaundice",
    "Liver failure",
    "Malaria",
    "Pneumonia",
    "Renal (kidney) failure",
    "Suicide",
    "None of the above words were mentioned",
  ];

  return (
    <CheckboxQuestionType
      value={value}
      onChange={onChange}
      options={choices}
      handleCheck={handleCheck} // Add handleCheck prop
      styles={styles.checkBoxes}
    />
  );
};



// Define specific question types
export const HighLowVery_Q = ({ onChange, value }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={["High", "Low", "Very low"]}
    />
  );
};

export const YesNoDKRef_Q = ({ onChange, value }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={["Yes", "No", "Doesn't know", "Refused to answer"]}
    />
  );
};

export const YesNODKRef2_Q = ({ onChange, value }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={[
        "Yes (SHE WAS NOT PREGNANT; AND SHE DID NOT RECENTLY DELIVER, HAVE ABORTION, OR MISCARRY)",
        "No (SHE WAS PREGNANT OR SHE RECENTLY DELIVERED, HAD AN ABORTION OR MISCARRIED)",
        "Doesn't know",
        "Refused to answer"
      ]}
    />
  );
};

export const Units_Q = ({ onChange, value }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={["Days", "Months", "Years", "Doesn't know", "Refused to answer"]}
    />
  );
};

export const UnitsSC_Q = ({ onChange, value }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={["Days", "Months", "Years"]}
    />
  );
};

export const Units1_Q = ({ onChange, value }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={["Days", "Months", "Years", "Doesn't know", "Refused to answer"]}
    />
  );
};

export const Units2_Q = ({ onChange, value }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={["Days", "Months", "Doesn't know", "Refused to answer"]}
    />
  );
};

export const Units3_Q = ({ onChange, value }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={["Hours", "Days", "Doesn't know", "Refused to answer"]}
    />
  );
};

export const Units4_Q = ({ onChange, value }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={["Months", "Years", "Doesn't know", "Refused to answer"]}
    />
  );
};

export const Units5_Q = ({ onChange, value }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={["Days", "Weeks", "Months", "Doesn't know", "Refused to answer"]}
    />
  );
};

export const D_M_DK_Ref_Q = ({ onChange, value }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={["Days", "Months", "Doesn't know", "Refused to answer"]}
    />
  );
};

export const M_H_D_DK_Ref_Q = ({ onChange, value }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={["Minutes", "Hours", "Days", "Doesn't know", "Refused to answer"]}
    />
  );
};

export const H_D_DK_Ref_Q = ({ onChange, value }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={["Hours", "Days", "Doesn't know", "Refused to answer"]}
    />
  );
};

export const H_D_M_DK_Q = ({ onChange, value }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={["Hours", "Days", "Minutes", "Doesn't know", "Refused to answer"]}
    />
  );
};

export const M_H_M_DK_Q = ({ onChange, value }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={["Minutes", "Hours", "Months", "Doesn't know"]}
    />
  );
};

export const M_H_D_DK_Q = ({ onChange, value }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={["Minutes", "Hours", "Days", "Doesn't know"]}
    />
  );
};

export const select_2_Q = ({ value, onChange }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={["Female", "Male", "Ambiguous/Intersex"]}
    />
  );
};

export const select_18_Q = ({ value, onChange }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={[
        "Hospital",
        "Other health facility",
        "Home",
        "On route to hospital or facility",
        "Other",
        "Doesn't know",
        "Refused to answer",
      ]}
    />
  );
};

export const select_19_Q = ({ value, onChange }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={[
        "Single",
        "Married",
        "Life partner",
        "Divorced",
        "Widowed",
        "Too young to be married",
        "Doesn't know",
        "Refused to answer",
      ]}
    />
  );
};

export const select_23_Q = ({ value, onChange }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={[
        "No formal education",
        "Primary school",
        "Secondary school",
        "Higher than secondary school",
        "Doesn't know",
        "Refused to answer",
      ]}
    />
  );
};

export const select_25_Q = ({ value, onChange }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={[
        "Mainly unemployed",
        "Mainly employed",
        "Home-maker",
        "Pensioner",
        "Student",
        "Doesn't know",
        "Refused to answer",
      ]}
    />
  );
};

export const select_32_Q = ({ value, onChange }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={[
        "Parent",
        "Child",
        "Other family member",
        "Friend",
        "Spouse",
        "Health worker",
        "Public official",
        "Another relationship",
        "Refused to answer",
      ]}
    />
  );
};

export const select_58_Q = ({ value, onChange }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={["Wet", "Dry", "Doesn't know"]}
    />
  );
};

export const select_63_Q = ({ value, onChange }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={["Mild", "Severe", "Doesn't know", "Refused to answer"]}
    />
  );
};

export const select_64_Q = ({ value, onChange }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={["Mild", "Severe", "Doesn't know", "Refused to answer"]}
    />
  );
};

export const select_80_Q = ({ value, onChange }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={["Contious", "On and off", "Doesn't know", "Refused to answer"]}
    />
  );
};

export const select_100_Q = ({ value, onChange }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={[
        "Upper right abdomen",
        "Upper left abdomen",
        "Lower right abdomen",
        "Lower left abdomen",
        "All over the abdomen",
        "Doesn't know",
        "Refused to answer",
      ]}
    />
  );
};

export const select_103_Q = ({ value, onChange }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={["Rapidly", "Slowly", "Doesn't know", "Refused to answer"]}
    />
  );
};

export const select_135_Q = ({ value, onChange }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={["Face", "Trunk or abdomen", "Extremities", "Everywhere", "Doesn't know", "Refused to answer"]}
    />
  );
};

export const select_208_Q = ({ value, onChange }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={["Hospital", "Other health facility", "Home", "On route to hospital or facility", "Other", "Doesn't know", "Refused to answer"]}
    />
  );
};

export const select_221_Q = ({ value, onChange }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={["Before delivery", "During delivery", "After delivery", "Doesn't know", "Refused to answer"]}
    />
  );
};

export const select_299_Q = ({ value, onChange }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={["Dog", "Snake", "Insect or scorpion", "Other", "Doesn't know", "Refused to answer"]}
    />
  );
};

export const select_306_Q = ({ value, onChange }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={["Cigarettes", "Pipe", "Chewing tobacco", "Local form of tobacco", "Other", "Doesn't know", "Refused to answer"]}
    />
  );
};

export const select_322_Q = ({ value, onChange }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={[
        "Traditional healer",
        "Homeopath",
        "Religious leader",
        "Government hospital",
        "Government health center or clinic",
        "Private hospital",
        "Community-based practioner associated with health system",
        "Trained birth attendant",
        "Private physician",
        "Relative, friend(outside household)",
        "Pharmacy",
        "Doesn't know",
        "Refused to answer",
      ]}
    />
  );
};

export const select_500_Q = ({ value, onChange }) => (
  <QuestionType
    value={value}
    onChange={onChange}
    options={[
      "Citizen at birth",
      "Naturalized citizen",
      "Foreign national",
      "Doesn't know",
      "Refused to answer",
    ]}
  />
);

export const select_501_Q = ({ value, onChange }) => {
  const handleCheck = (choiceValue) => {
    const newValue = [...(value || [])];
    if (newValue.includes(choiceValue)) {
      const index = newValue.indexOf(choiceValue);
      newValue.splice(index, 1);
    } else {
      newValue.push(choiceValue);
    }
    onChange(newValue);
  };

  const styles = useMyStyles();
  const choices = [
    "Stridor",
    "Grunting",
    "Wheezing",
    "None of the above",
    "Doesn't know",
    "Refused to answer",
  ];

  return (
    <CheckboxQuestionType
      value={value}
      onChange={onChange}
      options={choices}
      handleCheck={handleCheck} // Add handleCheck prop
      styles={styles.checkBoxes}
    />
  );
};

export const select_502_Q = ({ value, onChange }) => {
  const handleCheck = (choiceValue) => {
    const newValue = [...(value || [])];
    if (newValue.includes(choiceValue)) {
      const index = newValue.indexOf(choiceValue);
      newValue.splice(index, 1);
    } else {
      newValue.push(choiceValue);
    }
    onChange(newValue);
  };

  const styles = useMyStyles();
  const choices = ["Wheezing", "No", "Doesn't know", "Refused to answer"];

  return (
    <CheckboxQuestionType
      value={value}
      onChange={onChange}
      options={choices}
      handleCheck={handleCheck} // Add handleCheck prop
      styles={styles.checkBoxes}
    />
  );
};



export const select_512_Q = ({ value, onChange }) => {
  const handleCheck = (choiceValue) => {
    const newValue = [...(value || [])];
    if (newValue.includes(choiceValue)) {
      const index = newValue.indexOf(choiceValue);
      newValue.splice(index, 1);
    } else {
      newValue.push(choiceValue);
    }
    onChange(newValue);
  };

  const styles = useMyStyles();
  const choices = [
    "Asphyxia",
    "Incubtor",
    "Lung problem",
    "Pneumonia",
    "Preterm delivery",
    "Respitory distress",
    "None of the above words were mentioned",
  ];

  return (
    <CheckboxQuestionType
      value={value}
      onChange={onChange}
      options={choices}
      handleCheck={handleCheck} // Add handleCheck prop
      styles={styles.checkBoxes}
    />
  );
};

export const select_511_Q = ({ value, onChange }) => {
  const handleCheck = (choiceValue) => {
    const newValue = [...(value || [])];
    if (newValue.includes(choiceValue)) {
      const index = newValue.indexOf(choiceValue);
      newValue.splice(index, 1);
    } else {
      newValue.push(choiceValue);
    }
    onChange(newValue);
  };

  const styles = useMyStyles();
  const choices = [
    "Abdomen",
    "Cancer",
    "Dehydration",
    "Dengue fever",
    "Diarrhoea",
    "Fever",
    "Heart problems",
    "Jaundice (yellow skin or eyes)",
    "Pneumonia",
    "Rash",
    "None of the above words were mentioned",
  ];

  return (
    <CheckboxQuestionType
      value={value}
      onChange={onChange}
      options={choices}
      handleCheck={handleCheck} // Add handleCheck prop
      styles={styles.checkBoxes}
    />
  );
};

export const select_520_Q = ({ value, onChange }) => (
  <QuestionType
    value={value}
    onChange={onChange}
    options={[
      "Green or brown",
      "Clear (normal)",
      "Other",
      "Doesn't know",
      "Refused to answer",
    ]}
  />
);

export const select_530_Q = ({ value, onChange }) => (
  <QuestionType
    value={value}
    onChange={onChange}
    options={[
      "Doctor",
      "Midwife",
      "Nurse",
      "Relative",
      "Self (the mother)",
      "Traditional birth attendant",
      "Other",
      "Doesn't know",
      "Refused to answer",
    ]}
  />
);

export const select_531_Q = ({ value, onChange }) => (
  <QuestionType
    value={value}
    onChange={onChange}
    options={[
      "Positive",
      "Negative",
      "Unclear",
      "Doesn't know",
      "Refused to answer",
    ]}
  />
);

export const select_532_Q = ({ value, onChange }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={["Before", "After", "Don't know", "Refused to answer"]}
    />
  );
};

export const select_533_Q = ({ value, onChange }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={["Singleton", "Twins", "Triplets or more", "Don't know", "Refused to answer"]}
    />
  );
};

export const select_534_Q = ({ value, onChange }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={["Less or equal to 7 days", "More than 7 days", "Don't know", "Refused to answer"]}
    />
  );
};

export const select_535_Q = ({ value, onChange }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={["Months", "Years", "Don't know", "Refused to answer"]}
    />
  );
};

export const confirm_Q = ({ value, onChange }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={["Confirm"]}
    />
  );
};
