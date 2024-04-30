import { React, useState, useEffect } from "react";
import {
  RadioButton,
  Checkbox,
  TextInput,
  Text,
  useTheme,
} from "react-native-paper";
import { View, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

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
export const Text_Q = ({ onChange, value }) => (
  <TextInput value={value} onChangeText={onChange} />
);

export const DateQuestionType = () => {
  const [date, setDate] = useState(new Date());
  const styles = useMyStyles();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  return (
    <View style={styles.datePicker}>
      <DateTimePicker value={date} onChange={onChange} />
    </View>
  );
};

// Define other question types here...
export const ageGroup_Q = ({ value, onChange }) => (
  <RadioButton.Group onValueChange={onChange} value={value}>
    <RadioButton.Item label="Neonate" value="Neonate" />
    <RadioButton.Item label="Child" value="Child" />
    <RadioButton.Item label="Adult" value="Adult" />
  </RadioButton.Group>
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
  const styles = useMyStyles();
  return (
    <RadioButton.Group
      style={styles.radioButtonGroup}
      onValueChange={onChange}
      value={value}
    >
      <CustomRadioButton label="Yes" value="Yes" />
      <CustomRadioButton label="No" value="No" />
    </RadioButton.Group>
  );
};

export const HighLowVery_Q = ({ value, onChange }) => {
  const styles = useMyStyles();
  return (
    <RadioButton.Group
      style={styles.radioButtonGroup}
      onValueChange={onChange}
      value={value}
    >
      <CustomRadioButton label="High" value="High" />
      <CustomRadioButton label="Low" value="Low" />
      <CustomRadioButton label="Very low" value="Very low" />
    </RadioButton.Group>
  );
};

export const YesNoDKRef_Q = ({ value, onChange }) => {
  const styles = useMyStyles();
  return (
    <RadioButton.Group
      style={styles.radioButtonGroup}
      onValueChange={onChange}
      value={value}
    >
      <CustomRadioButton label="Yes" value="Yes" />
      <CustomRadioButton label="No" value="No" />
      <CustomRadioButton label="Doesn't know" value="Doesn't know" />
      <CustomRadioButton label="Refused to answer" value="Refused to answer" />
    </RadioButton.Group>
  );
};

export const YesNODKRef2_Q = ({ value, onChange }) => {
  const styles = useMyStyles();
  return (
    <RadioButton.Group
      style={styles.radioButtonGroup}
      onValueChange={onChange}
      value={value}
    >
      <CustomRadioButton
        label="Yes (SHE WAS NOT PREGNANT; AND SHE DID NOT RECENTLY DELIVER, HAVE ABORTION, OR MISCARRY)"
        value="Yes"
      />
      <CustomRadioButton
        label="No (SHE WAS PREGNANT OR SHE RECENTLY DELIVERED, HAD AN ABORTION OR MISCARRIED)"
        value="No"
      />
      <CustomRadioButton label="Doesn't know" value="Doesn't know" />
      <CustomRadioButton label="Refused to answer" value="Refused to answer" />
    </RadioButton.Group>
  );
};

export const Units_Q = ({ value, onChange }) => {
  const styles = useMyStyles();
  return (
    <RadioButton.Group
      style={styles.radioButtonGroup}
      onValueChange={onChange}
      value={value}
    >
      <CustomRadioButton label="Days" value="Days" />
      <CustomRadioButton label="Months" value="Months" />
      <CustomRadioButton label="Years" value="Years" />
      <CustomRadioButton label="Doesn't know" value="Doesn't know" />
      <CustomRadioButton label="Refused to answer" value="Refused to answer" />
    </RadioButton.Group>
  );
};

export const UnitsSC_Q = ({ value, onChange }) => {
  const styles = useMyStyles();
  return (
    <RadioButton.Group
      style={styles.radioButtonGroup}
      onValueChange={onChange}
      value={value}
    >
      <CustomRadioButton label="Days" value="Days" />
      <CustomRadioButton label="Months" value="Months" />
      <CustomRadioButton label="Years" value="Years" />
    </RadioButton.Group>
  );
};

export const Units1_Q = ({ value, onChange }) => {
  const styles = useMyStyles();
  return (
    <RadioButton.Group
      style={styles.radioButtonGroup}
      onValueChange={onChange}
      value={value}
    >
      <CustomRadioButton label="Days" value="Days" />
      <CustomRadioButton label="Months" value="Months" />
      <CustomRadioButton label="Years" value="Years" />
      <CustomRadioButton label="Doesn't know" value="Doesn't know" />
      <CustomRadioButton label="Refused to answer" value="Refused to answer" />
    </RadioButton.Group>
  );
};

export const Units2_Q = ({ value, onChange }) => {
  const styles = useMyStyles();
  return (
    <RadioButton.Group
      style={styles.radioButtonGroup}
      onValueChange={onChange}
      value={value}
    >
      <CustomRadioButton label="Days" value="Days" />
      <CustomRadioButton label="Months" value="Months" />
      <CustomRadioButton label="Doesn't know" value="Doesn't know" />
      <CustomRadioButton label="Refused to answer" value="Refused to answer" />
    </RadioButton.Group>
  );
};

export const Units3_Q = ({ value, onChange }) => {
  const styles = useMyStyles();
  return (
    <RadioButton.Group
      style={styles.radioButtonGroup}
      onValueChange={onChange}
      value={value}
    >
      <CustomRadioButton label="Hours" value="Hours" />
      <CustomRadioButton label="Days" value="Days" />
      <CustomRadioButton label="Doesn't know" value="Doesn't know" />
      <CustomRadioButton label="Refused to answer" value="Refused to answer" />
    </RadioButton.Group>
  );
};

export const Units4_Q = ({ value, onChange }) => {
  const styles = useMyStyles();
  return (
    <RadioButton.Group
      style={styles.radioButtonGroup}
      onValueChange={onChange}
      value={value}
    >
      <CustomRadioButton label="Months" value="Months" />
      <CustomRadioButton label="Years" value="Years" />
      <CustomRadioButton label="Doesn't know" value="Doesn't know" />
      <CustomRadioButton label="Refused to answer" value="Refused to answer" />
    </RadioButton.Group>
  );
};

export const Units5_Q = ({ value, onChange }) => {
  const styles = useMyStyles();
  return (
    <RadioButton.Group
      style={styles.radioButtonGroup}
      onValueChange={onChange}
      value={value}
    >
      <CustomRadioButton label="Days" value="Days" />
      <CustomRadioButton label="Weeks" value="Weeks" />
      <CustomRadioButton label="Months" value="Months" />
      <CustomRadioButton label="Doesn't know" value="Doesn't know" />
      <CustomRadioButton label="Refused to answer" value="Refused to answer" />
    </RadioButton.Group>
  );
};

export const D_M_DK_Ref_Q = ({ value, onChange }) => {
  const styles = useMyStyles();
  return (
    <RadioButton.Group
      style={styles.radioButtonGroup}
      onValueChange={onChange}
      value={value}
    >
      <CustomRadioButton label="Days" value="Days" />
      <CustomRadioButton label="Months" value="Months" />
      <CustomRadioButton label="Doesn't know" value="Doesn't know" />
      <CustomRadioButton label="Refused to answer" value="Refused to answer" />
    </RadioButton.Group>
  );
};

export const M_H_D_DK_Ref_Q = ({ value, onChange }) => {
  const styles = useMyStyles();
  return (
    <RadioButton.Group
      style={styles.radioButtonGroup}
      onValueChange={onChange}
      value={value}
    >
      <CustomRadioButton label="Minutes" value="Minutes" />
      <CustomRadioButton label="Hours" value="Hours" />
      <CustomRadioButton label="Days" value="Days" />
      <CustomRadioButton label="Doesn't know" value="Doesn't know" />
      <CustomRadioButton label="Refused to answer" value="Refused to answer" />
    </RadioButton.Group>
  );
};

export const H_D_DK_Ref_Q = ({ value, onChange }) => {
  const styles = useMyStyles();
  return (
    <RadioButton.Group
      style={styles.radioButtonGroup}
      onValueChange={onChange}
      value={value}
    >
      <CustomRadioButton label="Hours" value="Hours" />
      <CustomRadioButton label="Days" value="Days" />
      <CustomRadioButton label="Doesn't know" value="Doesn't know" />
      <CustomRadioButton label="Refused to answer" value="Refused to answer" />
    </RadioButton.Group>
  );
};

export const H_D_M_DK_Q = ({ value, onChange }) => {
  const styles = useMyStyles();
  return (
    <RadioButton.Group
      style={styles.radioButtonGroup}
      onValueChange={onChange}
      value={value}
    >
      <CustomRadioButton label="Hours" value="Hours" />
      <CustomRadioButton label="Days" value="Days" />
      <CustomRadioButton label="Minutes" value="Minutes" />
      <CustomRadioButton label="Doesn't know" value="Doesn't know" />
      <CustomRadioButton label="Refused to answer" value="Refused to answer" />
    </RadioButton.Group>
  );
};

export const M_H_M_DK_Q = ({ value, onChange }) => {
  const styles = useMyStyles();
  return (
    <RadioButton.Group
      style={styles.radioButtonGroup}
      onValueChange={onChange}
      value={value}
    >
      <CustomRadioButton label="Minutes" value="Minutes" />
      <CustomRadioButton label="Hours" value="Hours" />
      <CustomRadioButton label="Months" value="Months" />
      <CustomRadioButton label="Doesn't know" value="Doesn't know" />
    </RadioButton.Group>
  );
};

export const M_H_D_DK_Q = ({ value, onChange }) => {
  const styles = useMyStyles();
  return (
    <RadioButton.Group
      style={styles.radioButtonGroup}
      onValueChange={onChange}
      value={value}
    >
      <CustomRadioButton label="Minutes" value="Minutes" />
      <CustomRadioButton label="Hours" value="Hours" />
      <CustomRadioButton label="Days" value="Days" />
      <CustomRadioButton label="Doesn't know" value="Doesn't know" />
    </RadioButton.Group>
  );
};

export const select_2_Q = ({ value, onChange }) => {
  const styles = useMyStyles();
  return (
    <View style={styles.radioButtonGroup}>
      <RadioButton.Group onValueChange={onChange} value={value}>
        <CustomRadioButton label="Female" value="Female" />
        <CustomRadioButton label="Male" value="Male" />
        <CustomRadioButton
          label="Ambiguous/Intersex"
          value="Ambiguous/Intersex"
        />
      </RadioButton.Group>
    </View>
  );
};

export const select_18_Q = ({ value, onChange }) => {
  const styles = useMyStyles();
  return (
    <RadioButton.Group
      style={styles.radioButtonGroup}
      onValueChange={onChange}
      value={value}
    >
      <CustomRadioButton label="Hospital" value="Hospital" />
      <CustomRadioButton
        label="Other health facility"
        value="Other health facility"
      />
      <CustomRadioButton label="Home" value="Home" />
      <CustomRadioButton
        label="On Route"
        value="On route to hospital or facility"
      />
      <CustomRadioButton label="Other" value="Other" />
      <CustomRadioButton label="Doesn't know" value="Doesn't know" />
      <CustomRadioButton label="Refused to answer" value="Refused to answer" />
    </RadioButton.Group>
  );
};

export const select_19_Q = ({ value, onChange }) => {
  const styles = useMyStyles();
  return (
    <RadioButton.Group
      style={styles.radioButtonGroup}
      onValueChange={onChange}
      value={value}
    >
      <CustomRadioButton label="Single" value="Single" />
      <CustomRadioButton label="Married" value="Married" />
      <CustomRadioButton label="Life partner" value="Life partner" />
      <CustomRadioButton label="Divorced" value="Divorced" />
      <CustomRadioButton label="Widowed" value="Widowed" />
      <CustomRadioButton
        label="Too young to be married"
        value="Too young to be married"
      />
      <CustomRadioButton label="Doesn't know" value="Doesn't know" />
      <CustomRadioButton label="Refused to answer" value="Refused to answer" />
    </RadioButton.Group>
  );
};

export const select_23_Q = ({ value, onChange }) => {
  const styles = useMyStyles();
  return (
    <RadioButton.Group
      style={styles.radioButtonGroup}
      onValueChange={onChange}
      value={value}
    >
      <CustomRadioButton
        label="No formal education"
        value="No formal education"
      />
      <CustomRadioButton label="Primary school" value="Primary school" />
      <CustomRadioButton label="Secondary school" value="Secondary school" />
      <CustomRadioButton
        label="Higher than secondary school"
        value="Higher than secondary school"
      />
      <CustomRadioButton label="Doesn't know" value="Doesn't know" />
      <CustomRadioButton label="Refused to answer" value="Refused to answer" />
    </RadioButton.Group>
  );
};

export const select_25_Q = ({ value, onChange }) => {
  const styles = useMyStyles();
  return (
    <RadioButton.Group
      style={styles.radioButtonGroup}
      onValueChange={onChange}
      value={value}
    >
      <CustomRadioButton label="Mainly unemployed" value="Mainly unemployed" />
      <CustomRadioButton label="Mainly employed" value="Mainly employed" />
      <CustomRadioButton label="Home-maker" value="Home-maker" />
      <CustomRadioButton label="Pensioner" value="Pensioner" />
      <CustomRadioButton label="Student" value="Student" />
      <CustomRadioButton label="Doesn't know" value="Doesn't know" />
      <CustomRadioButton label="Refused to answer" value="Refused to answer" />
    </RadioButton.Group>
  );
};

export const select_32_Q = ({ value, onChange }) => {
  const styles = useMyStyles();
  return (
    <RadioButton.Group
      style={styles.radioButtonGroup}
      onValueChange={onChange}
      value={value}
    >
      <CustomRadioButton label="Parent" value="Parent" />
      <CustomRadioButton label="Child" value="Child" />
      <CustomRadioButton
        label="Other family member"
        value="Other family member"
      />
      <CustomRadioButton label="Friend" value="Friend" />
      <CustomRadioButton label="Spouse" value="Spouse" />
      <CustomRadioButton label="Health worker" value="Health worker" />
      <CustomRadioButton label="Public official" value="Public official" />
      <CustomRadioButton
        label="Another relationship"
        value="Another relationship"
      />
      <CustomRadioButton label="Refused to answer" value="Refused to answer" />
    </RadioButton.Group>
  );
};

export const select_58_Q = ({ value, onChange }) => {
  const styles = useMyStyles();
  return (
    <RadioButton.Group
      style={styles.radioButtonGroup}
      onValueChange={onChange}
      value={value}
    >
      <CustomRadioButton label="Wet" value="Wet" />
      <CustomRadioButton label="Dry" value="Dry" />
      <CustomRadioButton label="Doesn't know" value="Doesn't know" />
    </RadioButton.Group>
  );
};

export const select_63_Q = ({ value, onChange }) => {
  const styles = useMyStyles();
  return (
    <RadioButton.Group
      style={styles.radioButtonGroup}
      onValueChange={onChange}
      value={value}
    >
      <CustomRadioButton label="Mild" value="Mild" />
      <CustomRadioButton label="Severe" value="Severe" />
      <CustomRadioButton label="Doesn't know" value="Doesn't know" />
      <CustomRadioButton label="Refused to answer" value="Refused to answer" />
    </RadioButton.Group>
  );
};

export const select_64_Q = ({ value, onChange }) => {
  const styles = useMyStyles();
  return (
    <RadioButton.Group
      style={styles.radioButtonGroup}
      onValueChange={onChange}
      value={value}
    >
      <CustomRadioButton label="Mild" value="Mild" />
      <CustomRadioButton label="Severe" value="Severe" />
      <CustomRadioButton label="Doesn't know" value="Doesn't know" />
      <CustomRadioButton label="Refused to answer" value="Refused to answer" />
    </RadioButton.Group>
  );
};

export const select_80_Q = ({ value, onChange }) => {
  const styles = useMyStyles();
  return (
    <RadioButton.Group
      style={styles.radioButtonGroup}
      onValueChange={onChange}
      value={value}
    >
      <CustomRadioButton label="Contious" value="Contious" />
      <CustomRadioButton label="On and off" value="On and off" />
      <CustomRadioButton label="Doesn't know" value="Doesn't know" />
      <CustomRadioButton label="Refused to answer" value="Refused to answer" />
    </RadioButton.Group>
  );
};

export const select_100_Q = ({ value, onChange }) => {
  const styles = useMyStyles();
  return (
    <RadioButton.Group
      style={styles.radioButtonGroup}
      onValueChange={onChange}
      value={value}
    >
      <CustomRadioButton
        label="Upper right abdomen"
        value="Upper right abdomen"
      />
      <CustomRadioButton
        label="Upper left abdomen"
        value="Upper left abdomen"
      />
      <CustomRadioButton
        label="Lower right abdomen"
        value="Lower right abdomen"
      />
      <CustomRadioButton
        label="Lower left abdomen"
        value="Lower left abdomen"
      />
      <CustomRadioButton
        label="All over the abdomen"
        value="All over the abdomen"
      />
      <CustomRadioButton label="Doesn't know" value="Doesn't know" />
      <CustomRadioButton label="Refused to answer" value="Refused to answer" />
    </RadioButton.Group>
  );
};

export const select_103_Q = ({ value, onChange }) => {
  const styles = useMyStyles();
  return (
    <RadioButton.Group
      style={styles.radioButtonGroup}
      onValueChange={onChange}
      value={value}
    >
      <CustomRadioButton label="Rapidly" value="Rapidly" />
      <CustomRadioButton label="Slowly" value="Slowly" />
      <CustomRadioButton label="Doesn't know" value="Doesn't know" />
      <CustomRadioButton label="Refused to answer" value="Refused to answer" />
    </RadioButton.Group>
  );
};

export const select_135_Q = ({ value, onChange }) => {
  const styles = useMyStyles();
  return (
    <RadioButton.Group
      style={styles.radioButtonGroup}
      onValueChange={onChange}
      value={value}
    >
      <CustomRadioButton label="Face" value="Face" />
      <CustomRadioButton label="Trunk or abdomen" value="Trunk or abdomen" />
      <CustomRadioButton label="Extremities" value="Extremities" />
      <CustomRadioButton label="Everywhere" value="Everywhere" />
      <CustomRadioButton label="Doesn't know" value="Doesn't know" />
      <CustomRadioButton label="Refused to answer" value="Refused to answer" />
    </RadioButton.Group>
  );
};

export const select_208_Q = ({ value, onChange }) => {
  const styles = useMyStyles();
  return (
    <RadioButton.Group
      style={styles.radioButtonGroup}
      onValueChange={onChange}
      value={value}
    >
      <CustomRadioButton label="Hospital" value="Hospital" />
      <CustomRadioButton
        label="Other health facility"
        value="Other health facility"
      />
      <CustomRadioButton label="Home" value="Home" />
      <CustomRadioButton
        label="On route to hospital or facility"
        value="On route to hospital or facility"
      />
      <CustomRadioButton label="Other" value="Other" />
      <CustomRadioButton label="Doesn't know" value="Doesn't know" />
      <CustomRadioButton label="Refused to answer" value="Refused to answer" />
    </RadioButton.Group>
  );
};

export const select_221_Q = ({ value, onChange }) => {
  const styles = useMyStyles();
  return (
    <RadioButton.Group
      style={styles.radioButtonGroup}
      onValueChange={onChange}
      value={value}
    >
      <CustomRadioButton label="Before delivery" value="Before delivery" />
      <CustomRadioButton label="During delivery" value="During delivery" />
      <CustomRadioButton label="After delivery" value="After delivery" />
      <CustomRadioButton label="Doesn't know" value="Doesn't know" />
      <CustomRadioButton label="Refused to answer" value="Refused to answer" />
    </RadioButton.Group>
  );
};

export const select_299_Q = ({ value, onChange }) => {
  const styles = useMyStyles();
  return (
    <RadioButton.Group
      style={styles.radioButtonGroup}
      onValueChange={onChange}
      value={value}
    >
      <CustomRadioButton label="Dog" value="Dog" />
      <CustomRadioButton label="Snake" value="Snake" />
      <CustomRadioButton
        label="Insect or scorpion"
        value="Insect or scorpion"
      />
      <CustomRadioButton label="Other" value="Other" />
      <CustomRadioButton label="Doesn't know" value="Doesn't know" />
      <CustomRadioButton label="Refused to answer" value="Refused to answer" />
    </RadioButton.Group>
  );
};

export const select_306_Q = ({ value, onChange }) => {
  const styles = useMyStyles();
  return (
    <RadioButton.Group
      style={styles.radioButtonGroup}
      onValueChange={onChange}
      value={value}
    >
      <CustomRadioButton label="Cigarettes" value="Cigarettes" />
      <CustomRadioButton label="Pipe" value="Pipe" />
      <CustomRadioButton label="Chewing tobacco" value="Chewing tobacco" />
      <CustomRadioButton
        label="Local form of tobacco"
        value="Local form of tobacco"
      />
      <CustomRadioButton label="Other" value="Other" />
      <CustomRadioButton label="Doesn't know" value="Doesn't know" />
      <CustomRadioButton label="Refused to answer" value="Refused to answer" />
    </RadioButton.Group>
  );
};

export const select_322_Q = ({ value, onChange }) => {
  const styles = useMyStyles();
  return (
    <RadioButton.Group
      style={styles.radioButtonGroup}
      onValueChange={onChange}
      value={value}
    >
      <CustomRadioButton
        label="Traditional healer"
        value="Traditional healer"
      />
      <CustomRadioButton label="Homeopath" value="Homeopath" />
      <CustomRadioButton label="Religious leader" value="Religious leader" />
      <CustomRadioButton
        label="Government hospital"
        value="Government hospital"
      />
      <CustomRadioButton
        label="Government health center or clinic"
        value="Government health center or clinic"
      />
      <CustomRadioButton label="Private hospital" value="Private hospital" />
      <CustomRadioButton
        label="Community-based practioner associated with health system"
        value="Community-based practioner associated with health system"
      />
      <CustomRadioButton
        label="Trained birth attendant"
        value="Trained birth attendant"
      />
      <CustomRadioButton label="Private physician" value="Private physician" />
      <CustomRadioButton
        label="Relative, friend(outside household)"
        value="Relative, friend(outside household)"
      />
      <CustomRadioButton label="Pharmacy" value="Pharmacy" />
      <CustomRadioButton label="Doesn't know" value="Doesn't know" />
      <CustomRadioButton label="Refused to answer" value="Refused to answer" />
    </RadioButton.Group>
  );
};

export const select_500_Q = ({ value, onChange }) => (
  <RadioButton.Group onValueChange={onChange} value={value}>
    <CustomRadioButton label="Citizen at birth" value="Citizen at birth" />
    <CustomRadioButton
      label="Naturalized citizen"
      value="Naturalized citizen"
    />
    <CustomRadioButton label="Foreign national" value="Foreign national" />
    <CustomRadioButton label="Doesn't know" value="Doesn't know" />
    <CustomRadioButton label="Refused to answer" value="Refused to answer" />
  </RadioButton.Group>
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
    <>
      {choices.map((choice, index) => (
        <View style={styles.checkBoxes}>
          <Checkbox.Item
            key={index}
            label={choice}
            status={(value || []).includes(choice) ? "checked" : "unchecked"}
            onPress={() => handleCheck(choice)}
          />
        </View>
      ))}
    </>
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
    <>
      {choices.map((choice, index) => (
        <View style={styles.checkBoxes}>
          <Checkbox.Item
            key={index}
            label={choice}
            status={(value || []).includes(choice) ? "checked" : "unchecked"}
            onPress={() => handleCheck(choice)}
          />
        </View>
      ))}
    </>
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
    <>
      {choices.map((choice, index) => (
        <View key={index} style={styles.checkBoxes}>
          <Checkbox.Item
            label={choice}
            status={(value || []).includes(choice) ? "checked" : "unchecked"}
            onPress={() => handleCheck(choice)}
          />
        </View>
      ))}
    </>
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
    <>
      {choices.map((choice, index) => (
        <View key={index} style={styles.checkBoxes}>
          <Checkbox.Item
            label={choice}
            status={(value || []).includes(choice) ? "checked" : "unchecked"}
            onPress={() => handleCheck(choice)}
          />
        </View>
      ))}
    </>
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
    <>
      {choices.map((choice, index) => (
        <View key={index} style={styles.checkBoxes}>
          <Checkbox.Item
            label={choice}
            status={(value || []).includes(choice) ? "checked" : "unchecked"}
            onPress={() => handleCheck(choice)}
          />
        </View>
      ))}
    </>
  );
};

export const select_520_Q = ({ value, onChange }) => (
  <RadioButton.Group onValueChange={onChange} value={value}>
    <CustomRadioButton label="Green or brown" value="Choice1" />
    <CustomRadioButton label="Clear (normal)" value="Choice2" />
    <CustomRadioButton label="Other" value="Choice3" />
    <CustomRadioButton label="Doesn't know" value="Choice4" />
    <CustomRadioButton label="Refused to answer" value="Choice5" />
  </RadioButton.Group>
);

export const select_530_Q = ({ value, onChange }) => (
  <RadioButton.Group onValueChange={onChange} value={value}>
    <CustomRadioButton label="Doctor" value="Choice1" />
    <CustomRadioButton label="Midwife" value="Choice2" />
    <CustomRadioButton label="Nurse" value="Choice3" />
    <CustomRadioButton label="Relative" value="Choice4" />
    <CustomRadioButton label="Self (the mother)" value="Choice5" />
    <CustomRadioButton label="Traditional birth attendant" value="Choice6" />
    <CustomRadioButton label="Other" value="Choice7" />
    <CustomRadioButton label="Doesn't know" value="Choice8" />
    <CustomRadioButton label="Refused to answer" value="Choice9" />
  </RadioButton.Group>
);

export const select_531_Q = ({ value, onChange }) => (
  <RadioButton.Group onValueChange={onChange} value={value}>
    <CustomRadioButton label="Positive" value="Choice1" />
    <CustomRadioButton label="Negative" value="Choice2" />
    <CustomRadioButton label="Unclear" value="Choice3" />
    <CustomRadioButton label="Doesn't know" value="Choice4" />
    <CustomRadioButton label="Refused to answer" value="Choice5" />
  </RadioButton.Group>
);

export const select_532_Q = ({ value, onChange }) => (
  <RadioButton.Group onValueChange={onChange} value={value}>
    <CustomRadioButton label="Before" value="Choice1" />
    <CustomRadioButton label="After" value="Choice2" />
    <CustomRadioButton label="Don't know" value="Choice3" />
    <CustomRadioButton label="Refused to answer" value="Choice4" />
  </RadioButton.Group>
);

export const select_533_Q = ({ value, onChange }) => (
  <RadioButton.Group onValueChange={onChange} value={value}>
    <CustomRadioButton label="Singleton" value="Choice1" />
    <CustomRadioButton label="Twins" value="Choice2" />
    <CustomRadioButton label="Triplets or more" value="Choice3" />
    <CustomRadioButton label="Don't know" value="Choice4" />
    <CustomRadioButton label="Refused to answer" value="Choice5" />
  </RadioButton.Group>
);

export const select_534_Q = ({ value, onChange }) => (
  <RadioButton.Group onValueChange={onChange} value={value}>
    <CustomRadioButton label="Less or equal to 7 days" value="Choice1" />
    <CustomRadioButton label="More than 7 days" value="Choice2" />
    <CustomRadioButton label="DOn't know" value="Choice3" />
    <CustomRadioButton label="Refused to answer" value="Choice4" />
  </RadioButton.Group>
);

export const select_535_Q = ({ value, onChange }) => (
  <RadioButton.Group onValueChange={onChange} value={value}>
    <CustomRadioButton label="Months" value="Choice1" />
    <CustomRadioButton label="Years" value="Choice2" />
    <CustomRadioButton label="Don't know" value="Choice3" />
    <CustomRadioButton label="Refused to answer" value="Choice4" />
  </RadioButton.Group>
);

export const confirm_Q = ({ value, onChange }) => (
  <RadioButton.Group onValueChange={onChange} value={value}>
    <CustomRadioButton label="Confirm" value="Confirm" />
  </RadioButton.Group>
);
