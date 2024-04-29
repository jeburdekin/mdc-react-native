import {React, useState} from 'react';
import { RadioButton, Checkbox, TextInput, Text, useTheme } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

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
    });

    return styles;
  };

const CustomRadioButton = ({ label, value, status, onPress }) => {
    const styles = useMyStyles();
    return (
        <View style={styles.radioButton}>
            <RadioButton.Item label={label} value={value} status={status} onPress={onPress} />
        </View>
    );
}
export const Text_Q = ({ onChange, value }) => (
    <TextInput value={value} onChangeText={onChange} />
);

// Define other question types here...
export const ageGroup_Q = ({ value, onChange }) => (
    <RadioButton.Group onValueChange={onChange} value={value}>
        <RadioButton.Item label="Neonate" value="Neonate" />
        <RadioButton.Item label="Child" value="Child" />
        <RadioButton.Item label="Adult" value="Adult" />
    </RadioButton.Group>
);

export const IntegerInput = () => {
    const [value, setValue] = useState('');

    const handleTextChange = (text) => {
      // Check if the input is an integer
      if (/^\d+$/.test(text) || text === '') {
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
    const dateString = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

    return <Text style={{ fontWeight: 'bold', textAlign: "center" }}>{dateString}</Text>;
};

export const Start_Q = () => {
    const now = new Date();
    const timeString = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

    return <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>{timeString}</Text>;
};

export const YesNo_Q = ({ onChange, value }) => {
    const styles = useMyStyles();
    return (
        <RadioButton.Group style={styles.radioButtonGroup} onValueChange={onChange} value={value}>
            <CustomRadioButton label="Yes" value="Yes" />
            <CustomRadioButton label="No" value="No" />
        </RadioButton.Group>
    );
};

export const HighLowVery_Q = ({ value, onChange }) => {
    const styles = useMyStyles();
    return (
        <RadioButton.Group style={styles.radioButtonGroup} onValueChange={onChange} value={value}>
            <CustomRadioButton label="High" value="Choice 1" />
            <CustomRadioButton label="Low" value="Choice 2" />
            <CustomRadioButton label="Very low" value="Choice 3" />
        </RadioButton.Group>
    );
};

export const YesNoDKRef_Q = ({ value, onChange }) => {
    const styles = useMyStyles();
    return (
        <RadioButton.Group style={styles.radioButtonGroup} onValueChange={onChange} value={value}>
            <CustomRadioButton label="Yes" value="Yes" />
            <CustomRadioButton label="No" value="No" />
            <CustomRadioButton label="Doesn't know" value="Don't know" />
            <CustomRadioButton label="Refused to answer" value="Refused" />
        </RadioButton.Group>
    );
};

export const YesNODKRef2_Q = ({ value, onChange }) => {
    const styles = useMyStyles();
    return (
        <RadioButton.Group style={styles.radioButtonGroup} onValueChange={onChange} value={value}>
            <CustomRadioButton label="Yes (SHE WAS NOT PREGNANT; AND SHE DID NOT RECENTLY DELIVER, HAVE ABORTION, OR MISCARRY)" value="Yes" />
            <CustomRadioButton label="No (SHE WAS PREGNANT OR SHE RECENTLY DELIVERED, HAD AN ABORTION OR MISCARRIED)" value="No" />
            <CustomRadioButton label="Doesn't know" value="Don't know" />
            <CustomRadioButton label="Refused to answer" value="Refused" />
        </RadioButton.Group>
    );
};

export const D_M_DK_Ref_Q = ({ value, onChange }) => {
    const styles = useMyStyles();
    return (
        <RadioButton.Group style={styles.radioButtonGroup} onValueChange={onChange} value={value}>
            <CustomRadioButton label="Days" value="Days" />
            <CustomRadioButton label="Months" value="Months" />
            <CustomRadioButton label="Doesn't know" value="Don't know" />
            <CustomRadioButton label="Refused to answer" value="Refused" />
        </RadioButton.Group>
    );
};

export const M_H_D_DK_Ref_Q = ({ value, onChange }) => {
    const styles = useMyStyles();
    return (
        <RadioButton.Group style={styles.radioButtonGroup} onValueChange={onChange} value={value}>
            <CustomRadioButton label="Minutes" value="Minutes" />
            <CustomRadioButton label="Hours" value="Hours" />
            <CustomRadioButton label="Days" value="Days" />
            <CustomRadioButton label="Doesn't know" value="Don't know" />
            <CustomRadioButton label="Refused to answer" value="Refused" />
        </RadioButton.Group>
    );
};

export const H_D_DK_Ref_Q = ({ value, onChange }) => {
    const styles = useMyStyles();
    return (
        <RadioButton.Group style={styles.radioButtonGroup} onValueChange={onChange} value={value}>
            <CustomRadioButton label="Hours" value="Hours" />
            <CustomRadioButton label="Days" value="Days" />
            <CustomRadioButton label="Doesn't know" value="Don't know" />
            <CustomRadioButton label="Refused to answer" value="Refused" />
        </RadioButton.Group>
    );
};

export const H_D_M_DK_Q = ({ value, onChange }) => {
    const styles = useMyStyles();
    return (
        <RadioButton.Group style={styles.radioButtonGroup} onValueChange={onChange} value={value}>
            <CustomRadioButton label="Hours" value="Hours" />
            <CustomRadioButton label="Days" value="Days" />
            <CustomRadioButton label="Minutes" value="Minutes" />
            <CustomRadioButton label="Doesn't know" value="Don't know" />
            <CustomRadioButton label="Refused to answer" value="Refused" />
        </RadioButton.Group>
    );
};

export const M_H_M_DK_Q = ({ value, onChange }) => {
    const styles = useMyStyles();
    return (
        <RadioButton.Group style={styles.radioButtonGroup} onValueChange={onChange} value={value}>
            <CustomRadioButton label="Minutes" value="Minutes" />
            <CustomRadioButton label="Hours" value="Hours" />
            <CustomRadioButton label="Months" value="Days" />
            <CustomRadioButton label="Doesn't know" value="Don't know" />
        </RadioButton.Group>
    );
};

export const M_H_D_DK_Q = ({ value, onChange }) => {
    const styles = useMyStyles();
    return (
        <RadioButton.Group style={styles.radioButtonGroup} onValueChange={onChange} value={value}>
            <CustomRadioButton label="Minutes" value="Minutes" />
            <CustomRadioButton label="Hours" value="Hours" />
            <CustomRadioButton label="Days" value="Days" />
            <CustomRadioButton label="Doesn't know" value="Don't know" />
        </RadioButton.Group>
    );
};

export const select_2_Q = ({ value, onChange }) => {
    const styles = useMyStyles();
    return(
        <View style={styles.radioButtonGroup}>
            <RadioButton.Group onValueChange={onChange} value={value}>
                <CustomRadioButton label="Female" value="Female" />
                <CustomRadioButton label="Male" value="Male" />
                <CustomRadioButton label="Ambiguous/Intersex" value="Ambiguous/Intersex" />
            </RadioButton.Group>
        </View>
    );
}

export const select_18_Q = ({ value, onChange }) => {
    const styles = useMyStyles();
    return (
        <RadioButton.Group style={styles.radioButtonGroup} onValueChange={onChange} value={value}>
            <CustomRadioButton label="Hospital" value="Hospital" />
            <CustomRadioButton label="Other health facility" value="Other health facility" />
            <CustomRadioButton label="Home" value="Home" />
            <CustomRadioButton label="On Route" value="On route to hospital or facility" />
            <CustomRadioButton label="Other" value="Other" />
            <CustomRadioButton label="Doesn't know" value="Don't know" />
            <CustomRadioButton label="Refused to answer" value="Refused" />
        </RadioButton.Group>
    );
};

export const select_19_Q = ({ value, onChange }) => {
    const styles = useMyStyles();
    return (
        <RadioButton.Group style={styles.radioButtonGroup} onValueChange={onChange} value={value}>
            <CustomRadioButton label="Single" value="Single" />
            <CustomRadioButton label="Married" value="Married" />
            <CustomRadioButton label="Life partner" value="Life partner" />
            <CustomRadioButton label="Divorced" value="Divorced" />
            <CustomRadioButton label="Widowed" value="Widowed" />
            <CustomRadioButton label="Too young to be married" value="Too young to be married" />
            <CustomRadioButton label="Doesn't know" value="Doesn't know" />
            <CustomRadioButton label="Refused to answer" value="Refused to answer" />
        </RadioButton.Group>
    );
};

export const select_23_Q = ({ value, onChange }) => {
    const styles = useMyStyles();
    return (
        <RadioButton.Group style={styles.radioButtonGroup} onValueChange={onChange} value={value}>
            <CustomRadioButton label="No formal education" value="Choice1" />
            <CustomRadioButton label="Primary school" value="Choice2" />
            <CustomRadioButton label="Secondary school" value="Choice3" />
            <CustomRadioButton label="Higher than secondary school" value="Choice4" />
            <CustomRadioButton label="Doesn't know" value="Choice5" />
            <CustomRadioButton label="Refused to answer" value="Choice6" />
        </RadioButton.Group>
    );
};

export const select_25_Q = ({ response, setResponse }) => {
    const styles = useMyStyles();
    return (
        <RadioButton.Group style={styles.radioButtonGroup} onValueChange={onChange} value={value}>
            <CustomRadioButton label="Mainly unemployed" value="Choice1" />
            <CustomRadioButton label="Mainly employed" value="Choice2" />
            <CustomRadioButton label="Home-maker" value="Choice3" />
            <CustomRadioButton label="Pensioner" value="Choice4" />
            <CustomRadioButton label="Student" value="Choice5" />
            <CustomRadioButton label="Doesn't know" value="Choice6" />
            <CustomRadioButton label="Refused to answer" value="Choice7" />
        </RadioButton.Group>
    );
};

export const select_32_Q = ({ value, onChange }) => {
    const styles = useMyStyles();
    return (
        <RadioButton.Group style={styles.radioButtonGroup} onValueChange={onChange} value={value}>
            <CustomRadioButton label="Parent" value="Choice1" />
            <CustomRadioButton label="Child" value="Choice2" />
            <CustomRadioButton label="Other family member" value="Choice3" />
            <CustomRadioButton label="Friend" value="Choice4" />
            <CustomRadioButton label="Spouse" value="Choice5" />
            <CustomRadioButton label="Health worker" value="Choice6" />
            <CustomRadioButton label="Public official" value="Choice7" />
            <CustomRadioButton label="Another relationship" value="Choice8" />
            <CustomRadioButton label="Refused to answer" value="Choice9" />
        </RadioButton.Group>
    );
};

export const select_58_Q = ({ value, onChange }) => {
    const styles = useMyStyles();
    return (
        <RadioButton.Group style={styles.radioButtonGroup} onValueChange={onChange} value={value}>
            <CustomRadioButton label="Wet" value="Choice1" />
            <CustomRadioButton label="Dry" value="Choice2" />
            <CustomRadioButton label="Doesn't know" value="Choice3" />
        </RadioButton.Group>
    );
};

export const select_63_Q = ({ value, onChange }) => {
    const styles = useMyStyles();
    return (
        <RadioButton.Group style={styles.radioButtonGroup} onValueChange={onChange} value={value}>
            <CustomRadioButton label="Mild" value="Choice1" />
            <CustomRadioButton label="Severe" value="Choice2" />
            <CustomRadioButton label="Doesn't know" value="Choice3" />
            <CustomRadioButton label="Refused to answer" value="Choice4" />
        </RadioButton.Group>
    );
};

export const select_64_Q = ({ value, onChange }) => {
    const styles = useMyStyles();
    return (
        <RadioButton.Group style={styles.radioButtonGroup} onValueChange={onChange} value={value}>
            <CustomRadioButton label="Mild" value="Choice1" />
            <CustomRadioButton label="Severe" value="Choice2" />
            <CustomRadioButton label="Doesn't know" value="Choice3" />
            <CustomRadioButton label="Refused to answer" value="Choice4" />
        </RadioButton.Group>
    );
};

export const select_80_Q = ({ value, onChange }) => {
    const styles = useMyStyles();
    return (
        <RadioButton.Group style={styles.radioButtonGroup} onValueChange={onChange} value={value}>
            <CustomRadioButton label="Contious" value="Choice1" />
            <CustomRadioButton label="On and off" value="Choice2" />
            <CustomRadioButton label="Doesn't know" value="Choice3" />
            <CustomRadioButton label="Refused to answer" value="Choice4" />
        </RadioButton.Group>
    );
};

export const select_100_Q = ({ value, onChange }) => {
    const styles = useMyStyles();
    return (
        <RadioButton.Group style={styles.radioButtonGroup} onValueChange={onChange} value={value}>
            <CustomRadioButton label="Upper right abdomen" value="Choice1" />
            <CustomRadioButton label="Upper left abdomen" value="Choice2" />
            <CustomRadioButton label="Lower right abdomen" value="Choice3" />
            <CustomRadioButton label="Lower left abdomen" value="Choice4" />
            <CustomRadioButton label="All over the abdomen" value="Choice5" />
            <CustomRadioButton label="Doesn't know" value="Choice6" />
            <CustomRadioButton label="Refused to answer" value="Choice7" />
        </RadioButton.Group>
    );
};

export const select_103_Q = ({ value, onChange }) => {
    const styles = useMyStyles();
    return (
        <RadioButton.Group style={styles.radioButtonGroup} onValueChange={onChange} value={value}>
            <CustomRadioButton label="Rapidly" value="Choice1" />
            <CustomRadioButton label="Slowly" value="Choice2" />
            <CustomRadioButton label="Doesn't know" value="Choice3" />
            <CustomRadioButton label="Refused to answer" value="Choice4" />
        </RadioButton.Group>
    );
};

export const select_135_Q = ({ value, onChange }) => {
    const styles = useMyStyles();
    return (
        <RadioButton.Group style={styles.radioButtonGroup} onValueChange={onChange} value={value}>
            <CustomRadioButton label="Face" value="Choice1" />
            <CustomRadioButton label="Trunk or abdomen" value="Choice2" />
            <CustomRadioButton label="Extremities" value="Choice3" />
            <CustomRadioButton label="Everywhere" value="Choice4" />
            <CustomRadioButton label="Doesn't know" value="Choice5" />
            <CustomRadioButton label="Refused to answer" value="Choice6" />
        </RadioButton.Group>
    );
};

export const select_208_Q = ({ value, onChange }) => {
    const styles = useMyStyles();
    return (
        <RadioButton.Group style={styles.radioButtonGroup} onValueChange={onChange} value={value}>
            <CustomRadioButton label="Hospital" value="Choice1" />
            <CustomRadioButton label="Other health facility" value="Choice2" />
            <CustomRadioButton label="Home" value="Choice3" />
            <CustomRadioButton label="On route to hospital or facility" value="Choice4" />
            <CustomRadioButton label="Other" value="Choice5" />
            <CustomRadioButton label="Doesn't know" value="Choice6" />
            <CustomRadioButton label="Refused to answer" value="Choice7" />
        </RadioButton.Group>
    );
};

export const select_221_Q = ({ value, onChange }) => {
    const styles = useMyStyles();
    return (
        <RadioButton.Group style={styles.radioButtonGroup} onValueChange={onChange} value={value}>
            <CustomRadioButton label="Before delivery" value="Choice1" />
            <CustomRadioButton label="During delivery" value="Choice2" />
            <CustomRadioButton label="After delivery" value="Choice3" />
            <CustomRadioButton label="Doesn't know" value="Choice4" />
            <CustomRadioButton label="Refused to answer" value="Choice5" />
        </RadioButton.Group>
    );
};

export const select_299_Q = ({ value, onChange }) => {
    const styles = useMyStyles();
    return (
        <RadioButton.Group style={styles.radioButtonGroup} onValueChange={onChange} value={value}>
            <CustomRadioButton label="Dog" value="Choice1" />
            <CustomRadioButton label="Snake" value="Choice2" />
            <CustomRadioButton label="Insect or scorpion" value="Choice3" />
            <CustomRadioButton label="Other" value="Choice4" />
            <CustomRadioButton label="Doesn't know" value="Choice5" />
            <CustomRadioButton label="Refused to answer" value="Choice6" />
        </RadioButton.Group>
    );
};

export const select_306_Q = ({ value, onChange }) => {
    const styles = useMyStyles();
    return (
        <RadioButton.Group style={styles.radioButtonGroup} onValueChange={onChange} value={value}>
            <CustomRadioButton label="Cigarettes" value="Choice1" />
            <CustomRadioButton label="Pipe" value="Choice2" />
            <CustomRadioButton label="Chewing tobacco" value="Choice3" />
            <CustomRadioButton label="Local form of tobacco" value="Choice4" />
            <CustomRadioButton label="Other" value="Choice5" />
            <CustomRadioButton label="Doesn't know" value="Choice6" />
            <CustomRadioButton label="Refused to answer" value="Choice7" />
        </RadioButton.Group>
    );
};

export const select_322_Q = ({ value, onChange }) => {
    const styles = useMyStyles();
    return (
        <RadioButton.Group style={styles.radioButtonGroup} onValueChange={onChange} value={value}>
            <CustomRadioButton label="Traditional healer" value="Choice1" />
            <CustomRadioButton label="Homeopath" value="Choice2" />
            <CustomRadioButton label="Religious leader" value="Choice3" />
            <CustomRadioButton label="Government hospital" value="Choice4" />
            <CustomRadioButton label="Government health center or clinic" value="Choice5" />
            <CustomRadioButton label="Private hospital" value="Choice6" />
            <CustomRadioButton label="Community-based practioner associated with health system" value="Choice7" />
            <CustomRadioButton label="Trained birth attendant" value="Choice8" />
            <CustomRadioButton label="Private physician" value="Choice9" />
            <CustomRadioButton label="Relative, friend(outside household)" value="Choice10" />
            <CustomRadioButton label="Pharmacy" value="Choice11" />
            <CustomRadioButton label="Doesn't know" value="Choice12" />
            <CustomRadioButton label="Refused to answer" value="Choice13" />
        </RadioButton.Group>
    );
};

export const select_500_Q = ({ value, onChange }) => (
    <RadioButton.Group onValueChange={onChange} value={value}>
        <CustomRadioButton label="Citizen at birth" value="Choice1" />
        <CustomRadioButton label="Naturalized citizen" value="Choice2" />
        <CustomRadioButton label="Foreign national" value="Choice3" />
        <CustomRadioButton label="Doesn't know" value="Choice4" />
        <CustomRadioButton label="Refused to answer" value="Choice5" />
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

    return (
      <>
        <Checkbox.Item label="Stridor" status={(value || []).includes('Choice1') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice1')} />
        <Checkbox.Item label="Grunting" status={(value || []).includes('Choice2') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice2')} />
        <Checkbox.Item label="Wheezing" status={(value || []).includes('Choice3') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice3')} />
        <Checkbox.Item label="None of the above" status={(value || []).includes('Choice4') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice4')} />
        <Checkbox.Item label="Doesn't know" status={(value || []).includes('Choice5') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice5')} />
        <Checkbox.Item label="Refused to answer" status={(value || []).includes('Choice6') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice6')} />
      </>
    );
};

export const select_502_Q = ({ value, onChange }) => (
    <RadioButton.Group onValueChange={onChange} value={value}>
        <CustomRadioButton label="Wheezing" value="Choice1" />
        <CustomRadioButton label="No" value="Choice2" />
        <CustomRadioButton label="Doesn't know" value="Choice3" />
        <CustomRadioButton label="Refused to answer" value="Choice4" />
    </RadioButton.Group>
);

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

    return (
      <>
        <Checkbox.Item label="Chronic kidney disease" status={(value || []).includes('Choice1') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice1')} />
        <Checkbox.Item label="Dialysis" status={(value || []).includes('Choice2') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice2')} />
        <Checkbox.Item label="Fever" status={(value || []).includes('Choice3') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice3')} />
        <Checkbox.Item label="Heart attack" status={(value || []).includes('Choice4') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice4')} />
        <Checkbox.Item label="Heart problem" status={(value || []).includes('Choice5') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice5')} />
        <Checkbox.Item label="Jaundice" status={(value || []).includes('Choice6') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice6')} />
        <Checkbox.Item label="Liver failure" status={(value || []).includes('Choice7') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice7')} />
        <Checkbox.Item label="Malaria" status={(value || []).includes('Choice8') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice8')} />
        <Checkbox.Item label="Pneumonia" status={(value || []).includes('Choice9') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice9')} />
        <Checkbox.Item label="Renal (kidney) failure" status={(value || []).includes('Choice10') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice10')} />
        <Checkbox.Item label="Suicide" status={(value || []).includes('Choice11') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice11')} />
        <Checkbox.Item label="None of the above words were mentioned" status={(value || []).includes('Choice12') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice12')} />
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

    return (
      <>
        <Checkbox.Item label="Asphyxia" status={(value || []).includes('Choice1') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice1')} />
        <Checkbox.Item label="Incubtor" status={(value || []).includes('Choice2') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice2')} />
        <Checkbox.Item label="Lung problem" status={(value || []).includes('Choice3') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice3')} />
        <Checkbox.Item label="Pneumonia" status={(value || []).includes('Choice4') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice4')} />
        <Checkbox.Item label="Preterm delivery" status={(value || []).includes('Choice5') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice5')} />
        <Checkbox.Item label="Respitory distress" status={(value || []).includes('Choice6') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice6')} />
        <Checkbox.Item label="None of the above words were mentioned" status={(value || []).includes('Choice7') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice7')} />
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

    return (
      <>
        <Checkbox.Item label="Abdomen" status={(value || []).includes('Choice1') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice1')} />
        <Checkbox.Item label="Cancer" status={(value || []).includes('Choice2') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice2')} />
        <Checkbox.Item label="Dehydration" status={(value || []).includes('Choice3') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice3')} />
        <Checkbox.Item label="Dengue fever" status={(value || []).includes('Choice4') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice4')} />
        <Checkbox.Item label="Diarrhoea" status={(value || []).includes('Choice5') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice5')} />
        <Checkbox.Item label="Fever" status={(value || []).includes('Choice6') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice6')} />
        <Checkbox.Item label="Heart problems" status={(value || []).includes('Choice7') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice7')} />
        <Checkbox.Item label="Jaundice (yellow skin or eyes)" status={(value || []).includes('Choice8') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice8')} />
        <Checkbox.Item label="Pneumonia" status={(value || []).includes('Choice9') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice9')} />
        <Checkbox.Item label="Rash" status={(value || []).includes('Choice10') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice10')} />
        <Checkbox.Item label="None of the above words were mentioned" status={(value || []).includes('Choice11') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice11')} />
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

export const select_531_Q = ({ response, setResponse }) => (
    <RadioButton.Group onValueChange={setResponse} value={response}>
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
