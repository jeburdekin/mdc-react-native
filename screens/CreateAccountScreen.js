import * as React from "react";
import { useState } from "react";

import {
  useFonts,
  OpenSans_300Light,
  OpenSans_400Regular,
  OpenSans_500Medium,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
  OpenSans_800ExtraBold,
  OpenSans_300Light_Italic,
  OpenSans_400Regular_Italic,
  OpenSans_500Medium_Italic,
  OpenSans_600SemiBold_Italic,
  OpenSans_700Bold_Italic,
  OpenSans_800ExtraBold_Italic,
} from '@expo-google-fonts/open-sans';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Image,
  KeyboardAvoidingView
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
// import DatePicker from "react-native-date-picker";

import DateTimePicker from '@react-native-community/datetimepicker';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffcf7',
  },
  input: {
    height: 40,
    width: windowWidth * 0.8,
    textAlign: "center",
    alignSelf: "center",
    alignContent: "center",
    margin: 10,
    borderRadius: 10,
    fontSize: 14,
    backgroundColor: "#E2E2E2",
    zIndex: 2
  },
  pickerContainer: {
    height: 40,
    margin: 12,
    borderRadius: 10,
    backgroundColor: "#E2E2E2",
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#E57C63',
    width: 175,
    padding: 16,
    margin: 12,
    borderRadius:10,
    top: windowHeight * 0.12,
  },
  inputIOS: {
    fontSize: 14,
    textAlign: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    color: 'black',
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 14,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    color: 'black',
    paddingRight: 30,
  },
  buttonText: {
    textAlign: "center",
    color: "#fffcf7",
    fontSize: 30,
  },
  whiteBlock1: {
    backgroundColor: "#FFFFFF",
    width: windowWidth * 0.85,
    height: windowHeight * 0.07,
    marginTop: 7,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignSelf: "center",
    zIndex: 1,
  },
  whiteBlock2: {
    backgroundColor: "#FFFFFF",
    width: windowWidth * 0.85,
    height: windowHeight * 0.07,
    margin: 7,
    alignSelf: "center",
    zIndex: 1,
  },
  whiteBlock3: {
    backgroundColor: "#FFFFFF",
    width: windowWidth * 0.85,
    height: windowHeight * 0.07,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignSelf: "center",
    zIndex: 1,
  },
  orangeBlock: {
    backgroundColor: "#E57C63",
    width: windowWidth*0.9,
    height: windowHeight*0.6,
    borderRadius: 10,
    top: windowHeight * 0.12,
    zIndex: 0
  },
  buttonContainer: {
    flexDirection: "row",
    position: "absolute",
    alignSelf: "center",
    top: windowHeight * 0.48,
    alignItems: "center",
  },
  logo: {
    width: windowWidth,
    height: 50,
    top: windowHeight * 0.03,
    position: "absolute",
    zIndex: 2
  },
  picker: {
    zIndex: 3,
    width: windowWidth * 0.3,
    position: "absolute",
    height: 50,
    left: windowWidth * 0.3,
    alignSelf: "center",
    borderRadius: 10,
    backgroundColor: "#E2E2E2",
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
  const [location, setLocation] = React.useState("");
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
      <SafeAreaView style={{width: '100%', alignItems: "center"}}>
      <Image source={require ("../assets/MDC-logo long.png")} style={styles.logo}/>
      <View style={styles.orangeBlock}>
        <View style={styles.whiteBlock1}>
          <TextInput
            style={styles.input}
            placeholder="Email Address or Phone Number"
            placeholderTextColor="black"
            onChangeText={onChangeUser}
            value={user}
          />
        </View>
      <View style={styles.whiteBlock2}>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor="black"
          onChangeText={onChangePassword}
          value={password}
        />
      </View>
      <View style={styles.whiteBlock3}>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Confirm password"
          placeholderTextColor="black"
          onChangeText={onChangeConfirmPassword}
          value={confirmPassword}
        />
      </View>
      <View style={[styles.whiteBlock1, {marginTop: 40}]}>
        <TextInput
          style={styles.input}
          secureTextEntry={false}
          placeholder="Interviewer code, if applicable"
          placeholderTextColor="black"
          onChangeText={onChangeInterviewerCode}
          value={interviewerCode}
        />
      </View>
      <View style={styles.whiteBlock2}>
        <TouchableOpacity onPress={() => setOpen(true)} style={styles.input}>
          <Text style={{alignContent: "center", alignSelf: "center", margin: 10}}>{birthDate || "Click to select birth date"}</Text>
        </TouchableOpacity>
          {open && (
          <DateTimePicker
            style={styles.picker}
            testID="dateTimePicker"
            value={date}
            mode="date"
            display="default"
            is24Hour={true}
            onChange={onChange}
            onTouchCancel={() => setOpen(false)}
          />)}
      </View>
      <View style={[styles.whiteBlock2, {marginTop: 0}]}>
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
      </View>
      <View style={styles.whiteBlock3}>
        <TextInput
          style={styles.input}
          placeholder="Select Location"
          placeholderTextColor="black"
          onChangeText={setLocation}
          value={location}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Make Deaths Count")}
          style={styles.button}>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("User Home")}
          style={styles.button}>
          <Text style={styles.buttonText}>Create</Text>
        </TouchableOpacity>
      </View>
      </View>
      </SafeAreaView>
    </View>
  );
}
