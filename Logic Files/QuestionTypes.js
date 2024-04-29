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
    return (
        <RadioButton.Group onValueChange={onChange} value={value}>
            <RadioButton.Item label="Yes" value="Yes" />
            <RadioButton.Item label="No" value="No" />
            <RadioButton.Item label="Doesn't know" value="Don't know" />
            <RadioButton.Item label="Refused to answer" value="Refused" />
        </RadioButton.Group>
    );
};

export const YesNODKRef2_Q = ({ value, onChange }) => {
    return (
        <RadioButton.Group onValueChange={onChange} value={value}>
            <RadioButton.Item label="Yes (SHE WAS NOT PREGNANT; AND SHE DID NOT RECENTLY DELIVER, HAVE ABORTION, OR MISCARRY)" value="Yes" />
            <RadioButton.Item label="No (SHE WAS PREGNANT OR SHE RECENTLY DELIVERED, HAD AN ABORTION OR MISCARRIED)" value="No" />
            <RadioButton.Item label="Doesn't know" value="Don't know" />
            <RadioButton.Item label="Refused to answer" value="Refused" />
        </RadioButton.Group>
    );
};

export const D_M_DK_Ref_Q = ({ value, onChange }) => {
    return (
        <RadioButton.Group onValueChange={onChange} value={value}>
            <RadioButton.Item label="Days" value="Days" />
            <RadioButton.Item label="Months" value="Months" />
            <RadioButton.Item label="Doesn't know" value="Don't know" />
            <RadioButton.Item label="Refused to answer" value="Refused" />
        </RadioButton.Group>
    );
};

export const M_H_D_DK_Ref_Q = ({ value, onChange }) => {
    return (
        <RadioButton.Group onValueChange={onChange} value={value}>
            <RadioButton.Item label="Minutes" value="Minutes" />
            <RadioButton.Item label="Hours" value="Hours" />
            <RadioButton.Item label="Days" value="Days" />
            <RadioButton.Item label="Doesn't know" value="Don't know" />
            <RadioButton.Item label="Refused to answer" value="Refused" />
        </RadioButton.Group>
    );
};

export const H_D_DK_Ref_Q = ({ value, onChange }) => {
    return (
        <RadioButton.Group onValueChange={onChange} value={value}>
            <RadioButton.Item label="Hours" value="Hours" />
            <RadioButton.Item label="Days" value="Days" />
            <RadioButton.Item label="Doesn't know" value="Don't know" />
            <RadioButton.Item label="Refused to answer" value="Refused" />
        </RadioButton.Group>
    );
};

export const H_D_M_DK_Q = ({ value, onChange }) => {
    return (
        <RadioButton.Group onValueChange={onChange} value={value}>
            <RadioButton.Item label="Hours" value="Hours" />
            <RadioButton.Item label="Days" value="Days" />
            <RadioButton.Item label="Minutes" value="Minutes" />
            <RadioButton.Item label="Doesn't know" value="Don't know" />
            <RadioButton.Item label="Refused to answer" value="Refused" />
        </RadioButton.Group>
    );
};

export const M_H_M_DK_Q = ({ value, onChange }) => {
    return (
        <RadioButton.Group onValueChange={onChange} value={value}>
            <RadioButton.Item label="Minutes" value="Minutes" />
            <RadioButton.Item label="Hours" value="Hours" />
            <RadioButton.Item label="Months" value="Days" />
            <RadioButton.Item label="Doesn't know" value="Don't know" />
        </RadioButton.Group>
    );
};

export const M_H_D_DK_Q = ({ value, onChange }) => {
    return (
        <RadioButton.Group onValueChange={onChange} value={value}>
            <RadioButton.Item label="Minutes" value="Minutes" />
            <RadioButton.Item label="Hours" value="Hours" />
            <RadioButton.Item label="Days" value="Days" />
            <RadioButton.Item label="Doesn't know" value="Don't know" />
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
    return (
        <RadioButton.Group onValueChange={onChange} value={value}>
            <RadioButton.Item label="Hospital" value="Hospital" />
            <RadioButton.Item label="Other health facility" value="Other health facility" />
            <RadioButton.Item label="Home" value="Home" />
            <RadioButton.Item label="On Route" value="On route to hospital or facility" />
            <RadioButton.Item label="Other" value="Other" />
            <RadioButton.Item label="Doesn't know" value="Don't know" />
            <RadioButton.Item label="Refused to answer" value="Refused" />
        </RadioButton.Group>
    );
};

export const select_19_Q = ({ value, onChange }) => {
    return (
        <RadioButton.Group onValueChange={onChange} value={value}>
            <RadioButton.Item label="Single" value="Single" />
            <RadioButton.Item label="Married" value="Married" />
            <RadioButton.Item label="Life partner" value="Life partner" />
            <RadioButton.Item label="Divorced" value="Divorced" />
            <RadioButton.Item label="Widowed" value="Widowed" />
            <RadioButton.Item label="Too young to be married" value="Too young to be married" />
            <RadioButton.Item label="Doesn't know" value="Doesn't know" />
            <RadioButton.Item label="Refused to answer" value="Refused to answer" />
        </RadioButton.Group>
    );
};

export const select_23_Q = ({ value, onChange }) => {
    return (
        <RadioButton.Group onValueChange={onChange} value={value}>
            <RadioButton.Item label="No formal education" value="Choice1" />
            <RadioButton.Item label="Primary school" value="Choice2" />
            <RadioButton.Item label="Secondary school" value="Choice3" />
            <RadioButton.Item label="Higher than secondary school" value="Choice4" />
            <RadioButton.Item label="Doesn't know" value="Choice5" />
            <RadioButton.Item label="Refused to answer" value="Choice6" />
        </RadioButton.Group>
    );
};

export const select_25_Q = ({ response, setResponse }) => {
    return (
        <RadioButton.Group onValueChange={setResponse} value={response}>
            <RadioButton.Item label="Mainly unemployed" value="Choice1" />
            <RadioButton.Item label="Mainly employed" value="Choice2" />
            <RadioButton.Item label="Home-maker" value="Choice3" />
            <RadioButton.Item label="Pensioner" value="Choice4" />
            <RadioButton.Item label="Student" value="Choice5" />
            <RadioButton.Item label="Doesn't know" value="Choice6" />
            <RadioButton.Item label="Refused to answer" value="Choice7" />
        </RadioButton.Group>
    );
};

export const select_32_Q = ({ value, onChange }) => {
    return (
        <RadioButton.Group onValueChange={onChange} value={value}>
            <RadioButton.Item label="Parent" value="Choice1" />
            <RadioButton.Item label="Child" value="Choice2" />
            <RadioButton.Item label="Other family member" value="Choice3" />
            <RadioButton.Item label="Friend" value="Choice4" />
            <RadioButton.Item label="Spouse" value="Choice5" />
            <RadioButton.Item label="Health worker" value="Choice6" />
            <RadioButton.Item label="Public official" value="Choice7" />
            <RadioButton.Item label="Another relationship" value="Choice8" />
            <RadioButton.Item label="Refused to answer" value="Choice9" />
        </RadioButton.Group>
    );
};

export const select_58_Q = ({ value, onChange }) => {
    return (
        <RadioButton.Group onValueChange={onChange} value={value}>
            <RadioButton.Item label="Wet" value="Choice1" />
            <RadioButton.Item label="Dry" value="Choice2" />
            <RadioButton.Item label="Doesn't know" value="Choice3" />
        </RadioButton.Group>
    );
};

export const select_63_Q = ({ value, onChange }) => {
    return (
        <RadioButton.Group onValueChange={onChange} value={value}>
            <RadioButton.Item label="Mild" value="Choice1" />
            <RadioButton.Item label="Severe" value="Choice2" />
            <RadioButton.Item label="Doesn't know" value="Choice3" />
            <RadioButton.Item label="Refused to answer" value="Choice4" />
        </RadioButton.Group>
    );
};

export const select_64_Q = ({ value, onChange }) => {
    return (
        <RadioButton.Group onValueChange={onChange} value={value}>
            <RadioButton.Item label="Mild" value="Choice1" />
            <RadioButton.Item label="Severe" value="Choice2" />
            <RadioButton.Item label="Doesn't know" value="Choice3" />
            <RadioButton.Item label="Refused to answer" value="Choice4" />
        </RadioButton.Group>
    );
};

export const select_80_Q = ({ value, onChange }) => {
    return (
        <RadioButton.Group onValueChange={onChange} value={value}>
            <RadioButton.Item label="Contious" value="Choice1" />
            <RadioButton.Item label="On and off" value="Choice2" />
            <RadioButton.Item label="Doesn't know" value="Choice3" />
            <RadioButton.Item label="Refused to answer" value="Choice4" />
        </RadioButton.Group>
    );
};

export const select_100_Q = ({ value, onChange }) => {
    return (
        <RadioButton.Group onValueChange={onChange} value={value}>
            <RadioButton.Item label="Upper right abdomen" value="Choice1" />
            <RadioButton.Item label="Upper left abdomen" value="Choice2" />
            <RadioButton.Item label="Lower right abdomen" value="Choice3" />
            <RadioButton.Item label="Lower left abdomen" value="Choice4" />
            <RadioButton.Item label="All over the abdomen" value="Choice5" />
            <RadioButton.Item label="Doesn't know" value="Choice6" />
            <RadioButton.Item label="Refused to answer" value="Choice7" />
        </RadioButton.Group>
    );
};

export const select_103_Q = ({ value, onChange }) => {
    return (
        <RadioButton.Group onValueChange={onChange} value={value}>
            <RadioButton.Item label="Rapidly" value="Choice1" />
            <RadioButton.Item label="Slowly" value="Choice2" />
            <RadioButton.Item label="Doesn't know" value="Choice3" />
            <RadioButton.Item label="Refused to answer" value="Choice4" />
        </RadioButton.Group>
    );
};

export const select_135_Q = ({ value, onChange }) => {
    return (
        <RadioButton.Group onValueChange={onChange} value={value}>
            <RadioButton.Item label="Face" value="Choice1" />
            <RadioButton.Item label="Trunk or abdomen" value="Choice2" />
            <RadioButton.Item label="Extremities" value="Choice3" />
            <RadioButton.Item label="Everywhere" value="Choice4" />
            <RadioButton.Item label="Doesn't know" value="Choice5" />
            <RadioButton.Item label="Refused to answer" value="Choice6" />
        </RadioButton.Group>
    );
};

export const select_208_Q = ({ value, onChange }) => {
    return (
        <RadioButton.Group onValueChange={onChange} value={value}>
            <RadioButton.Item label="Hospital" value="Choice1" />
            <RadioButton.Item label="Other health facility" value="Choice2" />
            <RadioButton.Item label="Home" value="Choice3" />
            <RadioButton.Item label="On route to hospital or facility" value="Choice4" />
            <RadioButton.Item label="Other" value="Choice5" />
            <RadioButton.Item label="Doesn't know" value="Choice6" />
            <RadioButton.Item label="Refused to answer" value="Choice7" />
        </RadioButton.Group>
    );
};

export const select_221_Q = ({ value, onChange }) => {
    return (
        <RadioButton.Group onValueChange={onChange} value={value}>
            <RadioButton.Item label="Before delivery" value="Choice1" />
            <RadioButton.Item label="During delivery" value="Choice2" />
            <RadioButton.Item label="After delivery" value="Choice3" />
            <RadioButton.Item label="Doesn't know" value="Choice4" />
            <RadioButton.Item label="Refused to answer" value="Choice5" />
        </RadioButton.Group>
    );
};

export const select_299_Q = ({ value, onChange }) => {
    return (
        <RadioButton.Group onValueChange={onChange} value={value}>
            <RadioButton.Item label="Dog" value="Choice1" />
            <RadioButton.Item label="Snake" value="Choice2" />
            <RadioButton.Item label="Insect or scorpion" value="Choice3" />
            <RadioButton.Item label="Other" value="Choice4" />
            <RadioButton.Item label="Doesn't know" value="Choice5" />
            <RadioButton.Item label="Refused to answer" value="Choice6" />
        </RadioButton.Group>
    );
};

export const select_306_Q = ({ value, onChange }) => {
    return (
        <RadioButton.Group onValueChange={onChange} value={value}>
            <RadioButton.Item label="Cigarettes" value="Choice1" />
            <RadioButton.Item label="Pipe" value="Choice2" />
            <RadioButton.Item label="Chewing tobacco" value="Choice3" />
            <RadioButton.Item label="Local form of tobacco" value="Choice4" />
            <RadioButton.Item label="Other" value="Choice5" />
            <RadioButton.Item label="Doesn't know" value="Choice6" />
            <RadioButton.Item label="Refused to answer" value="Choice7" />
        </RadioButton.Group>
    );
};

export const select_322_Q = ({ value, onChange }) => {
    return (
        <RadioButton.Group onValueChange={onChange} value={value}>
            <RadioButton.Item label="Traditional healer" value="Choice1" />
            <RadioButton.Item label="Homeopath" value="Choice2" />
            <RadioButton.Item label="Religious leader" value="Choice3" />
            <RadioButton.Item label="Government hospital" value="Choice4" />
            <RadioButton.Item label="Government health center or clinic" value="Choice5" />
            <RadioButton.Item label="Private hospital" value="Choice6" />
            <RadioButton.Item label="Community-based practioner associated with health system" value="Choice7" />
            <RadioButton.Item label="Trained birth attendant" value="Choice8" />
            <RadioButton.Item label="Private physician" value="Choice9" />
            <RadioButton.Item label="Relative, friend(outside household)" value="Choice10" />
            <RadioButton.Item label="Pharmacy" value="Choice11" />
            <RadioButton.Item label="Doesn't know" value="Choice12" />
            <RadioButton.Item label="Refused to answer" value="Choice13" />
        </RadioButton.Group>
    );
};

export const select_500_Q = ({ value, onChange }) => (
    <RadioButton.Group onValueChange={onChange} value={value}>
        <RadioButton.Item label="Citizen at birth" value="Choice1" />
        <RadioButton.Item label="Naturalized citizen" value="Choice2" />
        <RadioButton.Item label="Foreign national" value="Choice3" />
        <RadioButton.Item label="Doesn't know" value="Choice4" />
        <RadioButton.Item label="Refused to answer" value="Choice5" />
    </RadioButton.Group>
);

export const select_501_Q = ({ response, setResponse }) => {
    const handleCheck = (value) => {
        const newResponse = [...response];
        if (newResponse.includes(value)) {
            const index = newResponse.indexOf(value);
            newResponse.splice(index, 1);
        } else {
            newResponse.push(value);
        }
        setResponse(newResponse);
    };

    return (
        <>
            <Checkbox.Item label="Stridor" status={response.includes('Choice1') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice1')} />
            <Checkbox.Item label="Grunting" status={response.includes('Choice2') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice2')} />
            <Checkbox.Item label="Wheezing" status={response.includes('Choice3') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice3')} />
            <Checkbox.Item label="None of the above" status={response.includes('Choice4') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice4')} />
            <Checkbox.Item label="Doesn't know" status={response.includes('Choice5') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice5')} />
            <Checkbox.Item label="Refused to answer" status={response.includes('Choice6') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice6')} />
        </>
    );
};

export const select_502_Q = ({ value, onChange }) => (
    <RadioButton.Group onValueChange={onChange} value={value}>
        <RadioButton.Item label="Wheezing" value="Choice1" />
        <RadioButton.Item label="No" value="Choice2" />
        <RadioButton.Item label="Doesn't know" value="Choice3" />
        <RadioButton.Item label="Refused to answer" value="Choice4" />
    </RadioButton.Group>
);

export const select_510_Q = ({ response, setResponse }) => {
    const handleCheck = (value) => {
        const newResponse = [...response];
        if (newResponse.includes(value)) {
            const index = newResponse.indexOf(value);
            newResponse.splice(index, 1);
        } else {
            newResponse.push(value);
        }
        setResponse(newResponse);
    };

    return (
        <>
            <Checkbox.Item label="Chronic kidney disease" status={response.includes('Choice1') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice1')} />
            <Checkbox.Item label="Dialysis" status={response.includes('Choice2') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice2')} />
            <Checkbox.Item label="Fever" status={response.includes('Choice3') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice3')} />
            <Checkbox.Item label="Heart attack" status={response.includes('Choice4') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice4')} />
            <Checkbox.Item label="Heart problem" status={response.includes('Choice5') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice5')} />
            <Checkbox.Item label="Jaundice" status={response.includes('Choice6') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice6')} />
            <Checkbox.Item label="Liver failure" status={response.includes('Choice7') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice7')} />
            <Checkbox.Item label="Malaria" status={response.includes('Choice8') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice8')} />
            <Checkbox.Item label="Pneumonia" status={response.includes('Choice9') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice9')} />
            <Checkbox.Item label="Renal (kidney) failure" status={response.includes('Choice10') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice10')} />
            <Checkbox.Item label="Suicide" status={response.includes('Choice11') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice11')} />
            <Checkbox.Item label="None of the above words were mentioned" status={response.includes('Choice12') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice12')} />
        </>
    );
};
export const select_512_Q = ({ response, setResponse }) => {
    const handleCheck = (value) => {
      const newResponse = [...response];
      if (newResponse.includes(value)) {
        const index = newResponse.indexOf(value);
        newResponse.splice(index, 1);
      } else {
        newResponse.push(value);
      }
      setResponse(newResponse);
    };

    return (
      <>
        <Checkbox.Item label="Asphyxia" status={response.includes('Choice1') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice1')} />
        <Checkbox.Item label="Incubtor" status={response.includes('Choice2') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice2')} />
        <Checkbox.Item label="Lung problem" status={response.includes('Choice3') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice3')} />
        <Checkbox.Item label="Pneumonia" status={response.includes('Choice4') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice4')} />
        <Checkbox.Item label="Preterm delivery" status={response.includes('Choice5') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice5')} />
        <Checkbox.Item label="Respitory distress" status={response.includes('Choice6') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice6')} />
        <Checkbox.Item label="None of the above words were mentioned" status={response.includes('Choice7') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice7')} />
      </>
    );
  };

export const select_511_Q = ({ response, setResponse }) => {
    const handleCheck = (value) => {
      const newResponse = [...response];
      if (newResponse.includes(value)) {
        const index = newResponse.indexOf(value);
        newResponse.splice(index, 1);
      } else {
        newResponse.push(value);
      }
      setResponse(newResponse);
    };

    return (
      <>
        <Checkbox.Item label="Abdomen" status={response.includes('Choice1') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice1')} />
        <Checkbox.Item label="Cancer" status={response.includes('Choice2') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice2')} />
        <Checkbox.Item label="Dehydration" status={response.includes('Choice3') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice3')} />
        <Checkbox.Item label="Dengue fever" status={response.includes('Choice4') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice4')} />
        <Checkbox.Item label="Diarrhoea" status={response.includes('Choice5') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice5')} />
        <Checkbox.Item label="Fever" status={response.includes('Choice6') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice6')} />
        <Checkbox.Item label="Heart problems" status={response.includes('Choice7') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice7')} />
        <Checkbox.Item label="Jaundice (yellow skin or eyes)" status={response.includes('Choice8') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice8')} />
        <Checkbox.Item label="Pneumonia" status={response.includes('Choice9') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice9')} />
        <Checkbox.Item label="Rash" status={response.includes('Choice10') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice10')} />
        <Checkbox.Item label="None of the above words were mentioned" status={response.includes('Choice11') ? 'checked' : 'unchecked'} onPress={() => handleCheck('Choice11')} />
      </>
    );
  };



export const select_520_Q = ({ value, onChange }) => (
    <RadioButton.Group onValueChange={onChange} value={value}>
        <RadioButton.Item label="Green or brown" value="Choice1" />
        <RadioButton.Item label="Clear (normal)" value="Choice2" />
        <RadioButton.Item label="Other" value="Choice3" />
        <RadioButton.Item label="Doesn't know" value="Choice4" />
        <RadioButton.Item label="Refused to answer" value="Choice5" />
    </RadioButton.Group>
);

export const select_530_Q = ({ value, onChange }) => (
    <RadioButton.Group onValueChange={onChange} value={value}>
        <RadioButton.Item label="Doctor" value="Choice1" />
        <RadioButton.Item label="Midwife" value="Choice2" />
        <RadioButton.Item label="Nurse" value="Choice3" />
        <RadioButton.Item label="Relative" value="Choice4" />
        <RadioButton.Item label="Self (the mother)" value="Choice5" />
        <RadioButton.Item label="Traditional birth attendant" value="Choice6" />
        <RadioButton.Item label="Other" value="Choice7" />
        <RadioButton.Item label="Doesn't know" value="Choice8" />
        <RadioButton.Item label="Refused to answer" value="Choice9" />
    </RadioButton.Group>
);

export const select_531_Q = ({ response, setResponse }) => (
    <RadioButton.Group onValueChange={setResponse} value={response}>
        <RadioButton.Item label="Positive" value="Choice1" />
        <RadioButton.Item label="Negative" value="Choice2" />
        <RadioButton.Item label="Unclear" value="Choice3" />
        <RadioButton.Item label="Doesn't know" value="Choice4" />
        <RadioButton.Item label="Refused to answer" value="Choice5" />
    </RadioButton.Group>
);

export const select_532_Q = ({ value, onChange }) => (
    <RadioButton.Group onValueChange={onChange} value={value}>
        <RadioButton.Item label="Before" value="Choice1" />
        <RadioButton.Item label="After" value="Choice2" />
        <RadioButton.Item label="Don't know" value="Choice3" />
        <RadioButton.Item label="Refused to answer" value="Choice4" />
    </RadioButton.Group>
);

export const select_533_Q = ({ value, onChange }) => (
    <RadioButton.Group onValueChange={onChange} value={value}>
        <RadioButton.Item label="Singleton" value="Choice1" />
        <RadioButton.Item label="Twins" value="Choice2" />
        <RadioButton.Item label="Triplets or more" value="Choice3" />
        <RadioButton.Item label="Don't know" value="Choice4" />
        <RadioButton.Item label="Refused to answer" value="Choice5" />
    </RadioButton.Group>
);

export const select_534_Q = ({ value, onChange }) => (
    <RadioButton.Group onValueChange={onChange} value={value}>
        <RadioButton.Item label="Less or equal to 7 days" value="Choice1" />
        <RadioButton.Item label="More than 7 days" value="Choice2" />
        <RadioButton.Item label="DOn't know" value="Choice3" />
        <RadioButton.Item label="Refused to answer" value="Choice4" />
    </RadioButton.Group>
);

export const select_535_Q = ({ value, onChange }) => (
    <RadioButton.Group onValueChange={onChange} value={value}>
        <RadioButton.Item label="Months" value="Choice1" />
        <RadioButton.Item label="Years" value="Choice2" />
        <RadioButton.Item label="Don't know" value="Choice3" />
        <RadioButton.Item label="Refused to answer" value="Choice4" />
    </RadioButton.Group>
);

export const confirm_Q = ({ value, onChange }) => (
    <RadioButton.Group onValueChange={onChange} value={value}>
        <RadioButton.Item label="Confirm" value="Confirm" />
    </RadioButton.Group>
);
