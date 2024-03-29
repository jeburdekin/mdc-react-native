import * as React from "react";
import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
// import DatePicker from "react-native-date-picker";

import DateTimePicker from '@react-native-community/datetimepicker';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#fffcf7',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 14,
    backgroundColor: "white",
  },
  pickerContainer: {
    height: 40,
    margin: 12,
    borderWidth: 0,
    backgroundColor: "white",
    borderColor: "black",
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#D9695F', width: 175, padding: 12, borderRadius:10, marginTop: 20,
  },
  inputIOS: {
    fontSize: 14,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 0,
    color: 'black',
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 14,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 0,
    borderColor: 'grey',
    borderRadius: 0,
    color: 'black',
    paddingRight: 30,
  },
  buttonText: {
    textAlign: "center",
    color: "#fffcf7",
    fontSize: 20,
  }
});

export default function CreateAccountScreen({ navigation }) {
  const [user, onChangeUser] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [confirmPassword, onChangeConfirmPassword] = useState("");
  const [interviewerCode, onChangeInterviewerCode] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [age, setAge] = React.useState(null);
  const [birthDate, setBirthDate] = useState(''); // Make sure this line is uncommented
  const formatDate = (date) => {
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  };
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setOpen(false); // Hide the picker
    if (currentDate) {
      setDate(currentDate);
      setBirthDate(formatDate(currentDate)); // Update birthDate
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeUser}
          value={user}
          placeholder="Email Address or Phone Number" // Set the placeholder text here
          placeholderTextColor="black"
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor="black"
          onChangeText={onChangePassword}
          value={password}
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Confirm password"
          placeholderTextColor="black"
          onChangeText={onChangeConfirmPassword}
          value={confirmPassword}
        />
        <TextInput
          style={styles.input}
          secureTextEntry={false}
          placeholder="Interviewer code, if applicable"
          placeholderTextColor="black"
          onChangeText={onChangeInterviewerCode}
          value={interviewerCode}
        />



        <TouchableOpacity onPress={() => setOpen(true)}>
          <Text style={styles.input}>{birthDate || "Click to select birth date"}</Text>
        </TouchableOpacity>
        {open && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            display="default"
            is24Hour={true}
            onChange={onChange}
            onTouchCancel={() => setOpen(false)}
          />
        )}



        <View style={styles.pickerContainer}>
          <RNPickerSelect
            onValueChange={(value) => setGender(value)}
            items={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
              { label: "Other", value: "other" },
            ]}
            style={{
              inputIOS: styles.inputIOS,
              inputAndroid: styles.inputAndroid,
              iconContainer: {
                top: 20,
                right: 10,
              },
              placeholder: {
                color: "black",
                fontSize: 14,
              }
            }}
            useNativeAndroidPickerStyle={false}
            placeholder={{
              label: "Click to select gender",
              value: null,
            }}
          />
        </View>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Select Location"
          placeholderTextColor="black"
          onChangeText={onChangePassword}
          value={password}
        />
      </SafeAreaView>
      <TouchableOpacity onPress={() => navigation.navigate("Make Deaths Count")}
        style={styles.button}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("User Home")}
        style={styles.button}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
}
