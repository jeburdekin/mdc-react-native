import React, { useState, useEffect } from "react";
import {
  Checkbox,
  Button,
  TextInput,
  useTheme,
  RadioButton,
  Dialog,
  Portal,
} from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import { View, StyleSheet, Text, TouchableOpacity, Platform, Modal, } from "react-native";
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

// const CustomRadioButton = ({ label, value, status, onPress }) => {
//   const styles = useMyStyles();
//   return (
//     <View style={styles.radioButton}>
//       <RadioButton.Item
//         label={label}
//         value={value}
//         status={status}
//         onPress={onPress}
//       />
//     </View>
//   );
// };

const CustomRadioButton = React.memo(({ label, value, selectedValue, setSelectedValue }) => {
  const { colors } = useTheme();
  const styles = useMyStyles();
  const isSelected = selectedValue === value;
  return (
    <TouchableOpacity
      style={[styles.radioButton, {backgroundColor: isSelected ? colors.primary : colors.background}]} // use theme colors
      onPress={() => setSelectedValue(value)}
    >
      <View style={[{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 10 }]}>
        <Text style={{color: isSelected ? 'white' : colors.text}}>{label}</Text>
        <RadioButton
          value={value}
          status={isSelected ? 'checked' : 'unchecked'}
          color={isSelected ? 'white' : colors.primary}
        />
      </View>
    </TouchableOpacity>
  );
});

const QuestionType = ({ value, onChange, options }) => {
  const styles = useMyStyles();
  const selectedValue = Array.isArray(value) ? value[0] : value;
  return (
    <RadioButton.Group
      style={styles.radioButtonGroup}
      onValueChange={(newValue) => onChange([newValue])}
      value={selectedValue}
    >
      {options.map((option, index) => (
        <CustomRadioButton
          key={index} // Use the index as a key
          label={option.label} // Use option.label instead of option
          value={option.value} // Use option.value instead of option
          selectedValue={selectedValue}
          setSelectedValue={(newValue) => onChange([newValue])}
        />
      ))}
    </RadioButton.Group>
  );
};

// const CheckboxQuestionType = ({ value, handleCheck, options, styles }) => {
//   return (
//     <View style={styles}>
//       {options.map((option) => (
//         <Checkbox.Item
//           key={option}
//           label={option}
//           status={value.includes(option) ? 'checked' : 'unchecked'}
//           onPress={() => handleCheck(option)}
//         />
//       ))}
//     </View>
//   );
// };

const CustomCheckbox = ({ label, value, handleCheck, isFirst, isLast, isDisabled }) => {
  const { colors } = useTheme();
  const isSelected = value.some(item => item.value === label.value);
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: isSelected ? colors.primary : colors.background,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: 10,
          padding: 10,
          opacity: isDisabled ? 0.2 : 1,
        },
        isFirst && { borderTopLeftRadius: 5, borderTopRightRadius: 5 },
        isLast && { borderBottomLeftRadius: 5, borderBottomRightRadius: 5 },
      ]}
      onPress={() => {
        if (!isDisabled) {
          handleCheck(label);
        }
      }}
      disabled={isDisabled}
    >
      <Text style={{color: isSelected ? 'white' : colors.text}}>{label.label}</Text>
      <Checkbox
        status={isSelected ? 'checked' : 'unchecked'}
        onPress={() => {
          if (!isDisabled) {
            handleCheck(label);
          }
        }}
        color={isSelected ? 'white' : colors.primary}
        uncheckedColor={colors.primary}
        disabled={isDisabled}
      />
    </TouchableOpacity>
  );
};

const CheckboxQuestionType = ({ value, onChange, options, styles }) => {
  const [propValue, setValue] = useState(value);

  useEffect(() => {
    setValue(propValue);
  }, [propValue]);

  const handleCheck = (label) => {
    if (!Array.isArray(propValue)) {
      console.error('value prop must be an array');
      return;
    }

    const isNoneSelected = propValue.some(val => val.value.includes('None of the above'));

    if (label.value.includes('None of the above')) {
      if (isNoneSelected) {
        setValue([]);
        onChange([]);
      } else {
        setValue([label]);
        onChange([label]);
      }
    } else if (isNoneSelected) {
      return;
    } else {
      const newValue = propValue.some(item => item.value === label.value) ? propValue.filter(item => item.value !== label.value) : [...propValue, label];
      setValue(newValue);
      onChange(newValue);
    }
  };

  return (
    <View style={styles}>
      {options.map((option, index) => (
        <CustomCheckbox
          key={option.value}
          label={option}
          handleCheck={handleCheck}
          value={Array.isArray(propValue) ? propValue : []}
          isFirst={index === 0}
          isLast={index === options.length - 1}
          isDisabled={propValue.some(val => val.value.includes('None of the above')) && !option.value.includes('None of the above')}
        />
      ))}
    </View>
  );
};



export const Text_Q = ({ onChange, value }) => (
  <TextInput
    value={Array.isArray(value) ? value.join(', ') : value}
    onChangeText={(text) => onChange(text.split(', '))}
  />
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
  const [tempDate, setTempDate] = useState(date);
  const [visible, setVisible] = useState(false);
  const styles = useMyStyles();

  const showDatePicker = () => {
    setTempDate(date); // set tempDate to the current date when the date picker is shown
    setVisible(true);
  };
  const hideDatePicker = () => setVisible(false);

  const handleConfirm = (event, selectedDate) => {
    const currentDate = selectedDate || tempDate;
    setTempDate(currentDate);
  };

  const handleSetDate = () => {
    setDate(tempDate);
    hideDatePicker();
  };

  const formattedDate = date.toLocaleDateString(); // format the date as a string

  return (
    <View style={styles.datePicker}>
      <TouchableOpacity onPress={showDatePicker}>
        <Text>{formattedDate}</Text>
      </TouchableOpacity>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDatePicker}>
          <Dialog.Title>Select date</Dialog.Title>
          <Dialog.Content>
            {visible && (
              <DateTimePicker
                testID="dateTimePicker"
                value={tempDate}
                mode={'date'}
                display="spinner"
                onChange={handleConfirm}
              />
            )}
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDatePicker}>Cancel</Button>
            <Button onPress={handleSetDate} >Confirm</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};


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
      options={[
        { label: "Yes", value: "Yes" },
        { label: "No", value: "No" },
      ]} // Pass an array of strings instead of an array of objects
    />
  );
};







// Define specific question types
export const HighLowVery_Q = ({ onChange, value }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={[
        { label: "High", value: "High" },
        { label: "Low", value: "Low" },
        { label: "Very Low", value: "VeryL" },
      ]}
    />
  );
};

export const YesNoDKRef_Q = ({ onChange, value }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={[
        { label: "Yes", value: "Yes" },
        { label: "No", value: "No" },
        { label: "Doesn't know", value: "DK" },
        { label: "Refused to answer", value: "Ref" }
      ]}
    />
  );
};

export const YesNODKRef2_Q = ({ onChange, value }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={[
        { label: "Yes (SHE WAS NOT PREGNANT; AND SHE DID NOT RECENTLY DELIVER, HAVE ABORTION, OR MISCARRY)", value: "Yes" },
        { label: "No (SHE WAS PREGNANT OR SHE RECENTLY DELIVERED, HAD AN ABORTION OR MISCARRIED)", value: "No" },
        { label: "Doesn't know", value: "DK" },
        { label: "Refused to answer", value: "Ref" },
      ]}
    />
  );
};

export const Units_Q = ({ onChange, value }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={[
        { label: "Days", value: "Days" },
        { label: "Months", value: "Months" },
        { label: "Years", value: "Years" },
        { label: "Doesn't know", value: "DK" },
        { label: "Refused to answer", value: "Ref" },
      ]}
    />
  );
};

export const UnitsSC_Q = ({ onChange, value }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={[
        { label: "Days", value: "Days" },
        { label: "Months", value: "Months" },
        { label: "Years", value: "Years" },
      ]}
    />
  );
};

export const Units1_Q = ({ onChange, value }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={[
        { label: "Days", value: "Days" },
        { label: "Months", value: "Months" },
        { label: "Years", value: "Years" },
        { label: "Doesn't know", value: "DK" },
        { label: "Refused to answer", value: "Ref" },
      ]}
    />
  );
};

export const Units2_Q = ({ onChange, value }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={[
        { label: "Days", value: "Days" },
        { label: "Months", value: "Months" },
        { label: "Doesn't know", value: "DK" },
        { label: "Refused to answer", value: "Ref" },
      ]}
    />
  );
};

export const Units3_Q = ({ onChange, value }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={[
        { label: "Hours", value: "Hours" },
        { label: "Days", value: "Days" },
        { label: "Doesn't know", value: "DK" },
        { label: "Refused to answer", value: "Ref" },
      ]}
    />
  );
};

export const Units4_Q = ({ onChange, value }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={[
        { label: "Months", value: "Months" },
        { label: "Years", value: "Years" },
        { label: "Doesn't know", value: "DK" },
        { label: "Refused to answer", value: "Ref" },
      ]}
    />
  );
};

export const Units5_Q = ({ onChange, value }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={[
        { label: "Days", value: "Days" },
        { label: "Weeks", value: "Weeks" },
        { label: "Months", value: "Months" },
        { label: "Doesn't know", value: "DK" },
        { label: "Refused to answer", value: "Ref" },
      ]}
    />
  );
};

export const D_M_DK_Ref_Q = ({ onChange, value }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={[
        { label: "Days", value: "Days" },
        { label: "Months", value: "Months" },
        { label: "Doesn't know", value: "DK" },
        { label: "Refused to answer", value: "Ref" },
      ]}
    />
  );
};

export const M_H_D_DK_Ref_Q = ({ onChange, value }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={[
        { label: "Minutes", value: "Minutes" },
        { label: "Hours", value: "Hours" },
        { label: "Days", value: "Days" },
        { label: "Doesn't know", value: "DK" },
        { label: "Refused to answer", value: "Ref" },
      ]}
    />
  );
};

export const H_D_DK_Ref_Q = ({ onChange, value }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={[
        { label: "Hours", value: "Hours" },
        { label: "Days", value: "Days" },
        { label: "Doesn't know", value: "DK" },
        { label: "Refused to answer", value: "Ref" },
      ]}
    />
  );
};

export const H_D_M_DK_Q = ({ onChange, value }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={[
        { label: "Hours", value: "Hours" },
        { label: "Days", value: "Days" },
        { label: "Minutes", value: "Minutes" },
        { label: "Doesn't know", value: "DK" },
        { label: "Refused to answer", value: "Ref" },
      ]}
    />
  );
};

export const M_H_M_DK_Q = ({ onChange, value }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={[
        { label: "Minutes", value: "Minutes" },
        { label: "Hours", value: "Hours" },
        { label: "Months", value: "Months" },
        { label: "Doesn't know", value: "DK" },
      ]}
    />
  );
};

export const M_H_D_DK_Q = ({ onChange, value }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={[
        { label: "Minutes", value: "Minutes" },
        { label: "Hours", value: "Hours" },
        { label: "Days", value: "Days" },
        { label: "Doesn't know", value: "DK" },
      ]}
    />
  );
};

export const select_2_Q = ({ value, onChange }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={[
        { label: "Female", value: "Female" },
        { label: "Male", value: "Male" },
        { label: "Ambiguous/Intersex", value: "Ambiguous/Intersex" },
      ]}
    />
  );
};

export const select_18_Q = ({ value, onChange }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={[
        { label: "Hospital", value: "Hospital" },
        { label: "Other health facility", value: "Other health facility" },
        { label: "Home", value: "Home" },
        { label: "On route to hospital or facility", value: "On route to hospital or facility" },
        { label: "Other", value: "Other" },
        { label: "Doesn't know", value: "DK" },
        { label: "Refused to answer", value: "Ref" },
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
        { label: "Single", value: "Single" },
        { label: "Married", value: "Married" },
        { label: "Life partner", value: "Life partner" },
        { label: "Divorced", value: "Divorced" },
        { label: "Widowed", value: "Widowed" },
        { label: "Too young to be married", value: "Too young to be married" },
        { label: "Doesn't know", value: "DK" },
        { label: "Refused to answer", value: "Ref" },
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
        { label: "No formal education", value: "No formal education" },
        { label: "Primary school", value: "Primary school" },
        { label: "Secondary school", value: "Secondary school" },
        { label: "Higher than secondary school", value: "Higher than secondary school" },
        { label: "Doesn't know", value: "DK" },
        { label: "Refused to answer", value: "Ref" },
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
        { label: "Mainly unemployed", value: "Mainly unemployed" },
        { label: "Mainly employed", value: "Mainly employed" },
        { label: "Home-maker", value: "Home-maker" },
        { label: "Pensioner", value: "Pensioner" },
        { label: "Student", value: "Student" },
        { label: "Doesn't know", value: "DK" },
        { label: "Refused to answer", value: "Ref" },
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
        { label: "Parent", value: "Parent" },
        { label: "Child", value: "Child" },
        { label: "Other family member", value: "Other family member" },
        { label: "Friend", value: "Friend" },
        { label: "Spouse", value: "Spouse" },
        { label: "Health worker", value: "Health worker" },
        { label: "Public official", value: "Public official" },
        { label: "Another relationship", value: "Another relationship" },
        { label: "Refused to answer", value: "Ref" },
      ]}
    />
  );
};

export const select_58_Q = ({ value, onChange }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={[
        { label: "Wet", value: "Wet" },
        { label: "Dry", value: "Dry" },
        { label: "Doesn't know", value: "DK" },
      ]}
    />
  );
};

export const select_63_Q = ({ value, onChange }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={[
        { label: "Mild", value: "Mild" },
        { label: "Severe", value: "Severe" },
        { label: "Doesn't know", value: "DK" },
        { label: "Refused to answer", value: "Ref" }
      ]}
    />
  );
};

export const select_64_Q = ({ value, onChange }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={[
        { label: "Mild", value: "Mild" },
        { label: "Severe", value: "Severe" },
        { label: "Doesn't know", value: "DK" },
        { label: "Refused to answer", value: "Ref" }
      ]}
    />
  );
};

export const select_80_Q = ({ value, onChange }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={[
        { label: "Continuous", value: "Continuous" },
        { label: "On and off", value: "On and off" },
        { label: "Doesn't know", value: "DK" },
        { label: "Refused to answer", value: "Ref" }
      ]}
    />
  );
};

export const select_100_Q = ({ value, onChange }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={[
        { label: "Upper right abdomen", value: "Upper right abdomen" },
        { label: "Upper left abdomen", value: "Upper left abdomen" },
        { label: "Lower right abdomen", value: "Lower right abdomen" },
        { label: "Lower left abdomen", value: "Lower left abdomen" },
        { label: "All over the abdomen", value: "All over the abdomen" },
        { label: "Doesn't know", value: "DK" },
        { label: "Refused to answer", value: "Ref" }
      ]}
    />
  );
};

export const select_103_Q = ({ value, onChange }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={[
        { label: "Rapidly", value: "Rapidly" },
        { label: "Slowly", value: "Slowly" },
        { label: "Doesn't know", value: "DK" },
        { label: "Refused to answer", value: "Ref" }
      ]}
    />
  );
};

export const select_135_Q = ({ value, onChange }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={[
        { label: "Face", value: "Face" },
        { label: "Trunk or abdomen", value: "Trunk or abdomen" },
        { label: "Extremities", value: "Extremities" },
        { label: "Everywhere", value: "Everywhere" },
        { label: "Doesn't know", value: "DK" },
        { label: "Refused to answer", value: "Ref" }
      ]}
    />
  );
};

export const select_208_Q = ({ value, onChange }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={[
        { label: "Hospital", value: "Hospital" },
        { label: "Other health facility", value: "Other health facility" },
        { label: "Home", value: "Home" },
        { label: "On route to hospital or facility", value: "On route to hospital or facility" },
        { label: "Other", value: "Other" },
        { label: "Doesn't know", value: "DK" },
        { label: "Refused to answer", value: "Ref" }
      ]}
    />
  );
};

export const select_221_Q = ({ value, onChange }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={[
        { label: "Before delivery", value: "Before delivery" },
        { label: "During delivery", value: "During delivery" },
        { label: "After delivery", value: "After delivery" },
        { label: "Doesn't know", value: "DK" },
        { label: "Refused to answer", value: "Ref" }
      ]}
    />
  );
};

export const select_299_Q = ({ value, onChange }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={[
        { label: "Dog", value: "Dog" },
        { label: "Snake", value: "Snake" },
        { label: "Insect or scorpion", value: "Insect or scorpion" },
        { label: "Other", value: "Other" },
        { label: "Doesn't know", value: "DK" },
        { label: "Refused to answer", value: "Ref" }
      ]}
    />
  );
};

export const select_306_Q = ({ value, onChange }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={[
        { label: "Cigarettes", value: "Cigarettes" },
        { label: "Pipe", value: "Pipe" },
        { label: "Chewing tobacco", value: "Chewing tobacco" },
        { label: "Local form of tobacco", value: "Local form of tobacco" },
        { label: "Other", value: "Other" },
        { label: "Doesn't know", value: "DK" },
        { label: "Refused to answer", value: "Ref" }
      ]}
    />
  );
};

export const select_322_Q = ({ value, onChange }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={[
        { label: "Traditional healer", value: "Traditional healer" },
        { label: "Homeopath", value: "Homeopath" },
        { label: "Religious leader", value: "Religious leader" },
        { label: "Government hospital", value: "Government hospital" },
        { label: "Government health center or clinic", value: "Government health center or clinic" },
        { label: "Private hospital", value: "Private hospital" },
        { label: "Community-based practioner associated with health system", value: "Community-based practioner associated with health system" },
        { label: "Trained birth attendant", value: "Trained birth attendant" },
        { label: "Private physician", value: "Private physician" },
        { label: "Relative, friend(outside household)", value: "Relative, friend(outside household)" },
        { label: "Pharmacy", value: "Pharmacy" },
        { label: "Doesn't know", value: "DK" },
        { label: "Refused to answer", value: "Ref" }
      ]}
    />
  );
};

export const select_500_Q = ({ value, onChange }) => (
  <QuestionType
    value={value}
    onChange={onChange}
    options={[
      { label: "Citizen at birth", value: "Citizen at birth" },
      { label: "Naturalized citizen", value: "Naturalized citizen" },
      { label: "Foreign national", value: "Foreign national" },
      { label: "Doesn't know", value: "DK" },
      { label: "Refused to answer", value: "Ref" }
    ]}
  />
);

export const select_501_Q = ({ value, onChange }) => {

  const styles = useMyStyles();
  const choices = [
    { label: "Stridor", value: "Stridor" },
    { label: "Grunting", value: "Grunting" },
    { label: "Wheezing", value: "Wheezing" },
    { label: "None of the above", value: "None of the above" },
    { label: "Doesn't know", value: "DK" },
    { label: "Refused to answer", value: "Ref" },
  ];

  return (
    <CheckboxQuestionType
      value={value}
      onChange={onChange}
      options={choices}
      styles={styles.checkBoxes}
    />
  );
};

export const select_502_Q = ({ value, onChange }) => {

  const styles = useMyStyles();
  const choices = [
    { label: "Wheezing", value: "Wheezing" },
    { label: "No", value: "No" },
    { label: "Doesn't know", value: "DK" },
    { label: "Refused to answer", value: "Ref" },
  ];

  return (
    <CheckboxQuestionType
      value={value}
      onChange={onChange}
      options={choices}
      styles={styles.checkBoxes}
    />
  );
};

export const select_510_Q = ({ value, onChange }) => {
  const styles = useMyStyles();
  const choices = [
    { label: "Chronic kidney disease", value: "Chronic kidney disease" },
    { label: "Dialysis", value: "Dialysis" },
    { label: "Fever", value: "Fever" },
    { label: "Heart attack", value: "Heart attack" },
    { label: "Heart problem", value: "Heart problem" },
    { label: "Jaundice", value: "Jaundice" },
    { label: "Liver failure", value: "Liver failure" },
    { label: "Malaria", value: "Malaria" },
    { label: "Pneumonia", value: "Pneumonia" },
    { label: "Renal (kidney) failure", value: "Renal failure" },
    { label: "Suicide", value: "Suicide" },
    { label: "None of the above words were mentioned", value: "None of the above" },
  ];

  return (
    <CheckboxQuestionType
      value={value}
      onChange={onChange}
      options={choices}
      styles={styles.checkBoxes}
    />
  );
};

export const select_512_Q = ({ value, onChange }) => {

  const styles = useMyStyles();
  const choices = [
    { label: "Asphyxia", value: "Asphyxia" },
    { label: "Incubtor", value: "Incubtor" },
    { label: "Lung problem", value: "Lung problem" },
    { label: "Pneumonia", value: "Pneumonia" },
    { label: "Preterm delivery", value: "Preterm delivery" },
    { label: "Respitory distress", value: "Respitory distress" },
    { label: "None of the above words were mentioned", value: "None of the above" },
  ];

  return (
    <CheckboxQuestionType
      value={value}
      onChange={onChange}
      options={choices}
      styles={styles.checkBoxes}
    />
  );
};

export const select_511_Q = ({ value, onChange }) => {

  const styles = useMyStyles();
  const choices = [
    { label: "Abdomen", value: "Abdomen" },
    { label: "Cancer", value: "Cancer" },
    { label: "Dehydration", value: "Dehydration" },
    { label: "Dengue fever", value: "Dengue fever" },
    { label: "Diarrhoea", value: "Diarrhoea" },
    { label: "Fever", value: "Fever" },
    { label: "Heart problems", value: "Heart problems" },
    { label: "Jaundice (yellow skin or eyes)", value: "Jaundice" },
    { label: "Pneumonia", value: "Pneumonia" },
    { label: "Rash", value: "Rash" },
    { label: "None of the above words were mentioned", value: "None of the above" },
  ];

  return (
    <CheckboxQuestionType
      value={value}
      onChange={onChange}
      options={choices}
      styles={styles.checkBoxes}
    />
  );
};

export const select_520_Q = ({ value, onChange }) => (
  <QuestionType
    value={value}
    onChange={onChange}
    options={[
      { label: "Green or brown", value: "Green or brown" },
      { label: "Clear (normal)", value: "Clear (normal)" },
      { label: "Other", value: "Other" },
      { label: "Doesn't know", value: "DK" },
      { label: "Refused to answer", value: "Ref" },
    ]}
  />
);

export const select_530_Q = ({ value, onChange }) => (
  <QuestionType
    value={value}
    onChange={onChange}
    options={[
      { label: "Doctor", value: "Doctor" },
      { label: "Midwife", value: "Midwife" },
      { label: "Nurse", value: "Nurse" },
      { label: "Relative", value: "Relative" },
      { label: "Self (the mother)", value: "Self (the mother)" },
      { label: "Traditional birth attendant", value: "Traditional birth attendant" },
      { label: "Other", value: "Other" },
      { label: "Doesn't know", value: "DK" },
      { label: "Refused to answer", value: "Ref" },
    ]}
  />
);

export const select_531_Q = ({ value, onChange }) => (
  <QuestionType
    value={value}
    onChange={onChange}
    options={[
      { label: "Positive", value: "Positive" },
      { label: "Negative", value: "Negative" },
      { label: "Unclear", value: "Unclear" },
      { label: "Doesn't know", value: "DK" },
      { label: "Refused to answer", value: "Ref" },
    ]}
  />
);

export const select_532_Q = ({ value, onChange }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={[
        { label: "Before", value: "Before" },
        { label: "After", value: "After" },
        { label: "Doesn't know", value: "DK" },
        { label: "Refused to answer", value: "Ref" },
      ]}
    />
  );
};

export const select_533_Q = ({ value, onChange }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={[
        { label: "Singleton", value: "Singleton" },
        { label: "Twins", value: "Twins" },
        { label: "Triplets or more", value: "Triplets or more" },
        { label: "Doesn't know", value: "DK" },
        { label: "Refused to answer", value: "Ref" },
      ]}
    />
  );
};

export const select_534_Q = ({ value, onChange }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={[
        { label: "Less or equal to 7 days", value: "Less or equal to 7 days" },
        { label: "More than 7 days", value: "More than 7 days" },
        { label: "Doesn't know", value: "DK" },
        { label: "Refused to answer", value: "Ref" },
      ]}
    />
  );
};

export const select_535_Q = ({ value, onChange }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={[
        { label: "Months", value: "Months" },
        { label: "Years", value: "Years" },
        { label: "Doesn't know", value: "DK" },
        { label: "Refused to answer", value: "Ref" },
      ]}
    />
  );
};

export const confirm_Q = ({ value, onChange }) => {
  return (
    <QuestionType
      value={value}
      onChange={onChange}
      options={[{ label: "Confirm", value: "Confirm" }]}
    />
  );
};
