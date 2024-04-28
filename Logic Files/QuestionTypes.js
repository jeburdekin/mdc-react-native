import React from 'react';
import { RadioButton, TextInput } from 'react-native-paper';

export const YesNoRef_Q = ({ response, setResponse }) => (
  <RadioButton.Group onValueChange={setResponse} value={response}>
    <RadioButton.Item label="Yes" value="Yes" />
    <RadioButton.Item label="No" value="No" />
  </RadioButton.Group>
);

export const Text_Q = ({ response, setResponse }) => (
  <TextInput value={response} onChangeText={setResponse} />
);

// Define other question types here...
export const ageGroup_Q = ({ response, setResponse }) => (
    <RadioButton.Group onValueChange={setResponse} value={response}>
        <RadioButton.Item label="18-24" value="18-24" />
        <RadioButton.Item label="25-34" value="25-34" />
        <RadioButton.Item label="35-44" value="35-44" />
    </RadioButton.Group>
);
export const YesNo_Q = ({ response, setResponse }) => (
    <RadioButton.Group onValueChange={setResponse} value={response}>
        <RadioButton.Item label="Yes" value="Yes" />
        <RadioButton.Item label="No" value="No" />
    </RadioButton.Group>
);
export const HighLowVery_Q = ({ response, setResponse }) => (
    <RadioButton.Group onValueChange={setResponse} value={response}>
        <RadioButton.Item label="High" value="High" />
        <RadioButton.Item label="Low" value="Low" />
        <RadioButton.Item label="Very low" value="Very High" />
    </RadioButton.Group>
);
export const YesNoDKRef_Q = ({ response, setResponse }) => (
    <RadioButton.Group onValueChange={setResponse} value={response}>

    </RadioButton.Group>
);
export const YesNODKRef2_Q = ({ response, setResponse }) => (
    <RadioButton.Group onValueChange={setResponse} value={response}>

    </RadioButton.Group>
);
export const D_M_DK_Ref_Q = ({ response, setResponse }) => (
    <RadioButton.Group onValueChange={setResponse} value={response}>
        <RadioButton.Item label="Days" value="Days" />
        <RadioButton.Item label="Months" value="Months" />
        <RadioButton.Item label="Doesn't know" value="Don't know" />
        <RadioButton.Item label="Refused to answer" value="Refused" />
    </RadioButton.Group>
);

export const M_H_D_DK_Ref_Q = ({ response, setResponse }) => (
    <RadioButton.Group onValueChange={setResponse} value={response}>
        <RadioButton.Item label="Minutes" value="Minutes" />
        <RadioButton.Item label="Hours" value="Hours" />
        <RadioButton.Item label="Days" value="Days" />
        <RadioButton.Item label="Doesn't know" value="Don't know" />
        <RadioButton.Item label="Refused to answer" value="Refused" />
    </RadioButton.Group>
);

export const H_D_DK_Ref_Q = ({ response, setResponse }) => (
    <RadioButton.Group onValueChange={setResponse} value={response}>
        <RadioButton.Item label="Hours" value="Hours" />
        <RadioButton.Item label="Days" value="Days" />
        <RadioButton.Item label="Doesn't know" value="Don't know" />
        <RadioButton.Item label="Refused to answer" value="Refused" />
    </RadioButton.Group>
);
export const H_D_M_DK_Q = ({ response, setResponse }) => (
    <RadioButton.Group onValueChange={setResponse} value={response}>
        <RadioButton.Item label="Hours" value="Hours" />
        <RadioButton.Item label="Days" value="Days" />
        <RadioButton.Item label="Minutes" value="Minutes" />
        <RadioButton.Item label="Doesn't know" value="Don't know" />
        <RadioButton.Item label="Refused to answer" value="Refused" />
    </RadioButton.Group>
);
export const M_H_M_DK_Q = ({ response, setResponse }) => (
    <RadioButton.Group onValueChange={setResponse} value={response}>
        <RadioButton.Item label="Minutes" value="Minutes" />
        <RadioButton.Item label="Hours" value="Hours" />
        <RadioButton.Item label="Months" value="Days" />
        <RadioButton.Item label="Doesn't know" value="Don't know" />
    </RadioButton.Group>
);
export const M_H_D_DK_Q = ({ response, setResponse }) => (
    <RadioButton.Group onValueChange={setResponse} value={response}>
        <RadioButton.Item label="Minutes" value="Minutes" />
        <RadioButton.Item label="Hours" value="Hours" />
        <RadioButton.Item label="Days" value="Days" />
        <RadioButton.Item label="Doesn't know" value="Don't know" />
    </RadioButton.Group>
);
export const select_2_Q = ({ response, setResponse }) => (
    <RadioButton.Group onValueChange={setResponse} value={response}>
        <RadioButton.Item label="Female" value="Female" />
        <RadioButton.Item label="Male" value="Male" />
        <RadioButton.Item label="Ambiguous/Intersex" value="Ambiguous/Intersex" />
    </RadioButton.Group>
);
export const select_18_Q = ({ response, setResponse }) => (
    <RadioButton.Group onValueChange={setResponse} value={response}>
        <RadioButton.Item label="Hospital" value="Hospital" />
        <RadioButton.Item label="Other health facility" value="Other health facility" />
        <RadioButton.Item label="Home" value="Home" />
        <RadioButton.Item label="On Route" value="On route to hospital or facility" />
        <RadioButton.Item label="Other" value="Other" />
        <RadioButton.Item label="Doesn't know" value="Don't know" />
        <RadioButton.Item label="Refused to answer" value="Refused" />
    </RadioButton.Group>
);
export const select_19_Q = ({ response, setResponse }) => (
    <RadioButton.Group onValueChange={setResponse} value={response}>
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

export const select_23_Q = ({ response, setResponse }) => (
    <RadioButton.Group onValueChange={setResponse} value={response}>
        <RadioButton.Item label="No formal education" value="Choice1" />
        <RadioButton.Item label="Primary school" value="Choice2" />
        <RadioButton.Item label="Secondary school" value="Choice3" />
        <RadioButton.Item label="Higher than secondary school" value="Choice4" />
        <RadioButton.Item label="Doesn't know" value="Choice5" />
        <RadioButton.Item label="Refused to answer" value="Choice6" />
    </RadioButton.Group>
);
export const select_25_Q = ({ response, setResponse }) => (
    <RadioButton.Group onValueChange={setResponse} value={response}>
        <RadioButton.Item label="Mainly unemployed" value="Choice1" />
        <RadioButton.Item label="Mainly employed" value="Choice2" />
        <RadioButton.Item label="Answer3" value="Choice3" />
        <RadioButton.Item label="Answer4" value="Choice4" />
        <RadioButton.Item label="Answer5" value="Choice5" />
        <RadioButton.Item label="Answer6" value="Choice6" />
        <RadioButton.Item label="Answer7" value="Choice7" />
        <RadioButton.Item label="Answer8" value="Choice8" />
        <RadioButton.Item label="Answer9" value="Choice9" />
        <RadioButton.Item label="Answer10" value="Choice10" />
    </RadioButton.Group>
);
export const select_32_Q = ({ response, setResponse }) => (
    <RadioButton.Group onValueChange={setResponse} value={response}>
        <RadioButton.Item label="Answer1" value="Choice1" />
        <RadioButton.Item label="Answer2" value="Choice2" />
        <RadioButton.Item label="Answer3" value="Choice3" />
        <RadioButton.Item label="Answer4" value="Choice4" />
        <RadioButton.Item label="Answer5" value="Choice5" />
        <RadioButton.Item label="Answer6" value="Choice6" />
        <RadioButton.Item label="Answer7" value="Choice7" />
        <RadioButton.Item label="Answer8" value="Choice8" />
        <RadioButton.Item label="Answer9" value="Choice9" />
        <RadioButton.Item label="Answer10" value="Choice10" />
    </RadioButton.Group>
);
export const select_58_Q = ({ response, setResponse }) => (
    <RadioButton.Group onValueChange={setResponse} value={response}>
        <RadioButton.Item label="Answer1" value="Choice1" />
        <RadioButton.Item label="Answer2" value="Choice2" />
        <RadioButton.Item label="Answer3" value="Choice3" />
        <RadioButton.Item label="Answer4" value="Choice4" />
        <RadioButton.Item label="Answer5" value="Choice5" />
        <RadioButton.Item label="Answer6" value="Choice6" />
        <RadioButton.Item label="Answer7" value="Choice7" />
        <RadioButton.Item label="Answer8" value="Choice8" />
        <RadioButton.Item label="Answer9" value="Choice9" />
        <RadioButton.Item label="Answer10" value="Choice10" />
    </RadioButton.Group>
);
export const select_63_Q = ({ response, setResponse }) => (
    <RadioButton.Group onValueChange={setResponse} value={response}>
        <RadioButton.Item label="Answer1" value="Choice1" />
        <RadioButton.Item label="Answer2" value="Choice2" />
        <RadioButton.Item label="Answer3" value="Choice3" />
        <RadioButton.Item label="Answer4" value="Choice4" />
        <RadioButton.Item label="Answer5" value="Choice5" />
        <RadioButton.Item label="Answer6" value="Choice6" />
        <RadioButton.Item label="Answer7" value="Choice7" />
        <RadioButton.Item label="Answer8" value="Choice8" />
        <RadioButton.Item label="Answer9" value="Choice9" />
        <RadioButton.Item label="Answer10" value="Choice10" />
    </RadioButton.Group>
);
export const select_64_Q = ({ response, setResponse }) => (
    <RadioButton.Group onValueChange={setResponse} value={response}>
        <RadioButton.Item label="Answer1" value="Choice1" />
        <RadioButton.Item label="Answer2" value="Choice2" />
        <RadioButton.Item label="Answer3" value="Choice3" />
        <RadioButton.Item label="Answer4" value="Choice4" />
        <RadioButton.Item label="Answer5" value="Choice5" />
        <RadioButton.Item label="Answer6" value="Choice6" />
        <RadioButton.Item label="Answer7" value="Choice7" />
        <RadioButton.Item label="Answer8" value="Choice8" />
        <RadioButton.Item label="Answer9" value="Choice9" />
        <RadioButton.Item label="Answer10" value="Choice10" />
    </RadioButton.Group>
);
export const select_80_Q = ({ response, setResponse }) => (
    <RadioButton.Group onValueChange={setResponse} value={response}>
        <RadioButton.Item label="Answer1" value="Choice1" />
        <RadioButton.Item label="Answer2" value="Choice2" />
        <RadioButton.Item label="Answer3" value="Choice3" />
        <RadioButton.Item label="Answer4" value="Choice4" />
        <RadioButton.Item label="Answer5" value="Choice5" />
        <RadioButton.Item label="Answer6" value="Choice6" />
        <RadioButton.Item label="Answer7" value="Choice7" />
        <RadioButton.Item label="Answer8" value="Choice8" />
        <RadioButton.Item label="Answer9" value="Choice9" />
        <RadioButton.Item label="Answer10" value="Choice10" />
    </RadioButton.Group>
);
export const select_100_Q = ({ response, setResponse }) => (
    <RadioButton.Group onValueChange={setResponse} value={response}>
        <RadioButton.Item label="Answer1" value="Choice1" />
        <RadioButton.Item label="Answer2" value="Choice2" />
        <RadioButton.Item label="Answer3" value="Choice3" />
        <RadioButton.Item label="Answer4" value="Choice4" />
        <RadioButton.Item label="Answer5" value="Choice5" />
        <RadioButton.Item label="Answer6" value="Choice6" />
        <RadioButton.Item label="Answer7" value="Choice7" />
        <RadioButton.Item label="Answer8" value="Choice8" />
        <RadioButton.Item label="Answer9" value="Choice9" />
        <RadioButton.Item label="Answer10" value="Choice10" />
    </RadioButton.Group>
);
export const select_103_Q = ({ response, setResponse }) => (
    <RadioButton.Group onValueChange={setResponse} value={response}>
        <RadioButton.Item label="Answer1" value="Choice1" />
        <RadioButton.Item label="Answer2" value="Choice2" />
        <RadioButton.Item label="Answer3" value="Choice3" />
        <RadioButton.Item label="Answer4" value="Choice4" />
        <RadioButton.Item label="Answer5" value="Choice5" />
        <RadioButton.Item label="Answer6" value="Choice6" />
        <RadioButton.Item label="Answer7" value="Choice7" />
        <RadioButton.Item label="Answer8" value="Choice8" />
        <RadioButton.Item label="Answer9" value="Choice9" />
        <RadioButton.Item label="Answer10" value="Choice10" />
    </RadioButton.Group>
);
export const select_135_Q = ({ response, setResponse }) => (
    <RadioButton.Group onValueChange={setResponse} value={response}>
        <RadioButton.Item label="Answer1" value="Choice1" />
        <RadioButton.Item label="Answer2" value="Choice2" />
        <RadioButton.Item label="Answer3" value="Choice3" />
        <RadioButton.Item label="Answer4" value="Choice4" />
        <RadioButton.Item label="Answer5" value="Choice5" />
        <RadioButton.Item label="Answer6" value="Choice6" />
        <RadioButton.Item label="Answer7" value="Choice7" />
        <RadioButton.Item label="Answer8" value="Choice8" />
        <RadioButton.Item label="Answer9" value="Choice9" />
        <RadioButton.Item label="Answer10" value="Choice10" />
    </RadioButton.Group>
);
export const select_208_Q = ({ response, setResponse }) => (
    <RadioButton.Group onValueChange={setResponse} value={response}>
        <RadioButton.Item label="Answer1" value="Choice1" />
        <RadioButton.Item label="Answer2" value="Choice2" />
        <RadioButton.Item label="Answer3" value="Choice3" />
        <RadioButton.Item label="Answer4" value="Choice4" />
        <RadioButton.Item label="Answer5" value="Choice5" />
        <RadioButton.Item label="Answer6" value="Choice6" />
        <RadioButton.Item label="Answer7" value="Choice7" />
        <RadioButton.Item label="Answer8" value="Choice8" />
        <RadioButton.Item label="Answer9" value="Choice9" />
        <RadioButton.Item label="Answer10" value="Choice10" />
    </RadioButton.Group>
);
export const select_221_Q = ({ response, setResponse }) => (
    <RadioButton.Group onValueChange={setResponse} value={response}>
        <RadioButton.Item label="Answer1" value="Choice1" />
        <RadioButton.Item label="Answer2" value="Choice2" />
        <RadioButton.Item label="Answer3" value="Choice3" />
        <RadioButton.Item label="Answer4" value="Choice4" />
        <RadioButton.Item label="Answer5" value="Choice5" />
        <RadioButton.Item label="Answer6" value="Choice6" />
        <RadioButton.Item label="Answer7" value="Choice7" />
        <RadioButton.Item label="Answer8" value="Choice8" />
        <RadioButton.Item label="Answer9" value="Choice9" />
        <RadioButton.Item label="Answer10" value="Choice10" />
    </RadioButton.Group>
);
export const select_299_Q = ({ response, setResponse }) => (
    <RadioButton.Group onValueChange={setResponse} value={response}>
        <RadioButton.Item label="Answer1" value="Choice1" />
        <RadioButton.Item label="Answer2" value="Choice2" />
        <RadioButton.Item label="Answer3" value="Choice3" />
        <RadioButton.Item label="Answer4" value="Choice4" />
        <RadioButton.Item label="Answer5" value="Choice5" />
        <RadioButton.Item label="Answer6" value="Choice6" />
        <RadioButton.Item label="Answer7" value="Choice7" />
        <RadioButton.Item label="Answer8" value="Choice8" />
        <RadioButton.Item label="Answer9" value="Choice9" />
        <RadioButton.Item label="Answer10" value="Choice10" />
    </RadioButton.Group>
);
export const select_306_Q = ({ response, setResponse }) => (
    <RadioButton.Group onValueChange={setResponse} value={response}>
        <RadioButton.Item label="Answer1" value="Choice1" />
        <RadioButton.Item label="Answer2" value="Choice2" />
        <RadioButton.Item label="Answer3" value="Choice3" />
        <RadioButton.Item label="Answer4" value="Choice4" />
        <RadioButton.Item label="Answer5" value="Choice5" />
        <RadioButton.Item label="Answer6" value="Choice6" />
        <RadioButton.Item label="Answer7" value="Choice7" />
        <RadioButton.Item label="Answer8" value="Choice8" />
        <RadioButton.Item label="Answer9" value="Choice9" />
        <RadioButton.Item label="Answer10" value="Choice10" />
    </RadioButton.Group>
);
export const select_322_Q = ({ response, setResponse }) => (
    <RadioButton.Group onValueChange={setResponse} value={response}>
        <RadioButton.Item label="Answer1" value="Choice1" />
        <RadioButton.Item label="Answer2" value="Choice2" />
        <RadioButton.Item label="Answer3" value="Choice3" />
        <RadioButton.Item label="Answer4" value="Choice4" />
        <RadioButton.Item label="Answer5" value="Choice5" />
        <RadioButton.Item label="Answer6" value="Choice6" />
        <RadioButton.Item label="Answer7" value="Choice7" />
        <RadioButton.Item label="Answer8" value="Choice8" />
        <RadioButton.Item label="Answer9" value="Choice9" />
        <RadioButton.Item label="Answer10" value="Choice10" />
    </RadioButton.Group>
);

export const select_500_Q = ({ response, setResponse }) => (
    <RadioButton.Group onValueChange={setResponse} value={response}>
        <RadioButton.Item label="Answer1" value="Choice1" />
        <RadioButton.Item label="Answer2" value="Choice2" />
        <RadioButton.Item label="Answer3" value="Choice3" />
        <RadioButton.Item label="Answer4" value="Choice4" />
        <RadioButton.Item label="Answer5" value="Choice5" />
        <RadioButton.Item label="Answer6" value="Choice6" />
        <RadioButton.Item label="Answer7" value="Choice7" />
        <RadioButton.Item label="Answer8" value="Choice8" />
        <RadioButton.Item label="Answer9" value="Choice9" />
        <RadioButton.Item label="Answer10" value="Choice10" />
    </RadioButton.Group>
);

export const select_501_Q = ({ response, setResponse }) => (
    <RadioButton.Group onValueChange={setResponse} value={response}>
        <RadioButton.Item label="Answer1" value="Choice1" />
        <RadioButton.Item label="Answer2" value="Choice2" />
        <RadioButton.Item label="Answer3" value="Choice3" />
        <RadioButton.Item label="Answer4" value="Choice4" />
        <RadioButton.Item label="Answer5" value="Choice5" />
        <RadioButton.Item label="Answer6" value="Choice6" />
        <RadioButton.Item label="Answer7" value="Choice7" />
        <RadioButton.Item label="Answer8" value="Choice8" />
        <RadioButton.Item label="Answer9" value="Choice9" />
        <RadioButton.Item label="Answer10" value="Choice10" />
    </RadioButton.Group>
);

export const select_502_Q = ({ response, setResponse }) => (
    <RadioButton.Group onValueChange={setResponse} value={response}>
        <RadioButton.Item label="Answer1" value="Choice1" />
        <RadioButton.Item label="Answer2" value="Choice2" />
        <RadioButton.Item label="Answer3" value="Choice3" />
        <RadioButton.Item label="Answer4" value="Choice4" />
        <RadioButton.Item label="Answer5" value="Choice5" />
        <RadioButton.Item label="Answer6" value="Choice6" />
        <RadioButton.Item label="Answer7" value="Choice7" />
        <RadioButton.Item label="Answer8" value="Choice8" />
        <RadioButton.Item label="Answer9" value="Choice9" />
        <RadioButton.Item label="Answer10" value="Choice10" />
    </RadioButton.Group>
);

export const select_510_Q = ({ response, setResponse }) => (
    <RadioButton.Group onValueChange={setResponse} value={response}>
        <RadioButton.Item label="Answer1" value="Choice1" />
        <RadioButton.Item label="Answer2" value="Choice2" />
        <RadioButton.Item label="Answer3" value="Choice3" />
        <RadioButton.Item label="Answer4" value="Choice4" />
        <RadioButton.Item label="Answer5" value="Choice5" />
        <RadioButton.Item label="Answer6" value="Choice6" />
        <RadioButton.Item label="Answer7" value="Choice7" />
        <RadioButton.Item label="Answer8" value="Choice8" />
        <RadioButton.Item label="Answer9" value="Choice9" />
        <RadioButton.Item label="Answer10" value="Choice10" />
    </RadioButton.Group>
);

export const select_512_Q = ({ response, setResponse }) => (
    <RadioButton.Group onValueChange={setResponse} value={response}>
        <RadioButton.Item label="Answer1" value="Choice1" />
        <RadioButton.Item label="Answer2" value="Choice2" />
        <RadioButton.Item label="Answer3" value="Choice3" />
        <RadioButton.Item label="Answer4" value="Choice4" />
        <RadioButton.Item label="Answer5" value="Choice5" />
        <RadioButton.Item label="Answer6" value="Choice6" />
        <RadioButton.Item label="Answer7" value="Choice7" />
        <RadioButton.Item label="Answer8" value="Choice8" />
        <RadioButton.Item label="Answer9" value="Choice9" />
        <RadioButton.Item label="Answer10" value="Choice10" />
    </RadioButton.Group>
);

export const select_511_Q = ({ response, setResponse }) => (
    <RadioButton.Group onValueChange={setResponse} value={response}>
        <RadioButton.Item label="Answer1" value="Choice1" />
        <RadioButton.Item label="Answer2" value="Choice2" />
        <RadioButton.Item label="Answer3" value="Choice3" />
        <RadioButton.Item label="Answer4" value="Choice4" />
        <RadioButton.Item label="Answer5" value="Choice5" />
        <RadioButton.Item label="Answer6" value="Choice6" />
        <RadioButton.Item label="Answer7" value="Choice7" />
        <RadioButton.Item label="Answer8" value="Choice8" />
        <RadioButton.Item label="Answer9" value="Choice9" />
        <RadioButton.Item label="Answer10" value="Choice10" />
    </RadioButton.Group>
);

export const select_520_Q = ({ response, setResponse }) => (
    <RadioButton.Group onValueChange={setResponse} value={response}>
        <RadioButton.Item label="Answer1" value="Choice1" />
        <RadioButton.Item label="Answer2" value="Choice2" />
        <RadioButton.Item label="Answer3" value="Choice3" />
        <RadioButton.Item label="Answer4" value="Choice4" />
        <RadioButton.Item label="Answer5" value="Choice5" />
        <RadioButton.Item label="Answer6" value="Choice6" />
        <RadioButton.Item label="Answer7" value="Choice7" />
        <RadioButton.Item label="Answer8" value="Choice8" />
        <RadioButton.Item label="Answer9" value="Choice9" />
        <RadioButton.Item label="Answer10" value="Choice10" />
    </RadioButton.Group>
);

export const select_521_Q = ({ response, setResponse }) => (
    <RadioButton.Group onValueChange={setResponse} value={response}>
        <RadioButton.Item label="Answer1" value="Choice1" />
        <RadioButton.Item label="Answer2" value="Choice2" />
        <RadioButton.Item label="Answer3" value="Choice3" />
        <RadioButton.Item label="Answer4" value="Choice4" />
        <RadioButton.Item label="Answer5" value="Choice5" />
        <RadioButton.Item label="Answer6" value="Choice6" />
        <RadioButton.Item label="Answer7" value="Choice7" />
        <RadioButton.Item label="Answer8" value="Choice8" />
        <RadioButton.Item label="Answer9" value="Choice9" />
        <RadioButton.Item label="Answer10" value="Choice10" />
    </RadioButton.Group>
);

export const select_522_Q = ({ response, setResponse }) => (
    <RadioButton.Group onValueChange={setResponse} value={response}>
        <RadioButton.Item label="Answer1" value="Choice1" />
        <RadioButton.Item label="Answer2" value="Choice2" />
        <RadioButton.Item label="Answer3" value="Choice3" />
        <RadioButton.Item label="Answer4" value="Choice4" />
        <RadioButton.Item label="Answer5" value="Choice5" />
        <RadioButton.Item label="Answer6" value="Choice6" />
        <RadioButton.Item label="Answer7" value="Choice7" />
        <RadioButton.Item label="Answer8" value="Choice8" />
        <RadioButton.Item label="Answer9" value="Choice9" />
        <RadioButton.Item label="Answer10" value="Choice10" />
    </RadioButton.Group>
);

export const select_530_Q = ({ response, setResponse }) => (
    <RadioButton.Group onValueChange={setResponse} value={response}>
        <RadioButton.Item label="Answer1" value="Choice1" />
        <RadioButton.Item label="Answer2" value="Choice2" />
        <RadioButton.Item label="Answer3" value="Choice3" />
        <RadioButton.Item label="Answer4" value="Choice4" />
        <RadioButton.Item label="Answer5" value="Choice5" />
        <RadioButton.Item label="Answer6" value="Choice6" />
        <RadioButton.Item label="Answer7" value="Choice7" />
        <RadioButton.Item label="Answer8" value="Choice8" />
        <RadioButton.Item label="Answer9" value="Choice9" />
        <RadioButton.Item label="Answer10" value="Choice10" />
    </RadioButton.Group>
);

export const select_531_Q = ({ response, setResponse }) => (
    <RadioButton.Group onValueChange={setResponse} value={response}>
        <RadioButton.Item label="Answer1" value="Choice1" />
        <RadioButton.Item label="Answer2" value="Choice2" />
        <RadioButton.Item label="Answer3" value="Choice3" />
        <RadioButton.Item label="Answer4" value="Choice4" />
        <RadioButton.Item label="Answer5" value="Choice5" />
        <RadioButton.Item label="Answer6" value="Choice6" />
        <RadioButton.Item label="Answer7" value="Choice7" />
        <RadioButton.Item label="Answer8" value="Choice8" />
        <RadioButton.Item label="Answer9" value="Choice9" />
        <RadioButton.Item label="Answer10" value="Choice10" />
    </RadioButton.Group>
);

export const select_532_Q = ({ response, setResponse }) => (
    <RadioButton.Group onValueChange={setResponse} value={response}>
        <RadioButton.Item label="Answer1" value="Choice1" />
        <RadioButton.Item label="Answer2" value="Choice2" />
        <RadioButton.Item label="Answer3" value="Choice3" />
        <RadioButton.Item label="Answer4" value="Choice4" />
        <RadioButton.Item label="Answer5" value="Choice5" />
        <RadioButton.Item label="Answer6" value="Choice6" />
        <RadioButton.Item label="Answer7" value="Choice7" />
        <RadioButton.Item label="Answer8" value="Choice8" />
        <RadioButton.Item label="Answer9" value="Choice9" />
        <RadioButton.Item label="Answer10" value="Choice10" />
    </RadioButton.Group>
);

export const select_533_Q = ({ response, setResponse }) => (
    <RadioButton.Group onValueChange={setResponse} value={response}>
        <RadioButton.Item label="Answer1" value="Choice1" />
        <RadioButton.Item label="Answer2" value="Choice2" />
        <RadioButton.Item label="Answer3" value="Choice3" />
        <RadioButton.Item label="Answer4" value="Choice4" />
        <RadioButton.Item label="Answer5" value="Choice5" />
        <RadioButton.Item label="Answer6" value="Choice6" />
        <RadioButton.Item label="Answer7" value="Choice7" />
        <RadioButton.Item label="Answer8" value="Choice8" />
        <RadioButton.Item label="Answer9" value="Choice9" />
        <RadioButton.Item label="Answer10" value="Choice10" />
    </RadioButton.Group>
);

export const select_534_Q = ({ response, setResponse }) => (
    <RadioButton.Group onValueChange={setResponse} value={response}>
        <RadioButton.Item label="Answer1" value="Choice1" />
        <RadioButton.Item label="Answer2" value="Choice2" />
        <RadioButton.Item label="Answer3" value="Choice3" />
        <RadioButton.Item label="Answer4" value="Choice4" />
        <RadioButton.Item label="Answer5" value="Choice5" />
        <RadioButton.Item label="Answer6" value="Choice6" />
        <RadioButton.Item label="Answer7" value="Choice7" />
        <RadioButton.Item label="Answer8" value="Choice8" />
        <RadioButton.Item label="Answer9" value="Choice9" />
        <RadioButton.Item label="Answer10" value="Choice10" />
    </RadioButton.Group>
);

export const select_535_Q = ({ response, setResponse }) => (
    <RadioButton.Group onValueChange={setResponse} value={response}>
        <RadioButton.Item label="Answer1" value="Choice1" />
        <RadioButton.Item label="Answer2" value="Choice2" />
        <RadioButton.Item label="Answer3" value="Choice3" />
        <RadioButton.Item label="Answer4" value="Choice4" />
        <RadioButton.Item label="Answer5" value="Choice5" />
        <RadioButton.Item label="Answer6" value="Choice6" />
        <RadioButton.Item label="Answer7" value="Choice7" />
        <RadioButton.Item label="Answer8" value="Choice8" />
        <RadioButton.Item label="Answer9" value="Choice9" />
        <RadioButton.Item label="Answer10" value="Choice10" />
    </RadioButton.Group>
);

export const confirm_Q = ({ response, setResponse }) => (
    <RadioButton.Group onValueChange={setResponse} value={response}>
        <RadioButton.Item label="Confirm" value="Confirm" />
    </RadioButton.Group>
);
