import * as React from "react";
import { useState } from "react";

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
} from "react-native";
import { Dialog, Portal, Button, TextInput as DialogInput } from 'react-native-paper';
import RNPickerSelect from "react-native-picker-select";
// import DatePicker from "react-native-date-picker";
import DateTimePicker from '@react-native-community/datetimepicker';
import { getAuth, createUserWithEmailAndPassword, signInWithPhoneNumber } from "firebase/auth";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


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
  
  const [visible, setVisible] = React.useState(false);
  const [verificationCode, setVerificationCode] = React.useState('');

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const auth = getAuth();

  const handleSignUp = async () => {
    // Check if user, password, or confirmPassword is empty
    if (!user || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    try {
      // Check if the user input is an email or a phone number
      if (user.includes('@')) {
        // Sign up with email
        const userCredential = await createUserWithEmailAndPassword(auth, user, password);
        // Signed in 
        const userName = userCredential.user;
        // ...
        navigation.navigate("Make Deaths Count")
      } else {
        // Sign up with phone number
        const confirmation = await signInWithPhoneNumber(auth, user);
        // SMS sent. Prompt user to type the code from the message, then sign the user in
        Alert.prompt(
          'Enter your code',
          'A verification code has been sent to your phone number.',
          [
            {
              text: 'Cancel',
              style: 'cancel',
            },
            {
              text: 'OK',
              onPress: async (verificationCode) => {
                try {
                  const result = await confirmation.confirm(verificationCode);
                  // User signed in 
                  const user = result.user;
                  // ...
                  navigation.navigate("Home Screen")
                } catch (error) {
                  Alert.alert('Invalid code. Please try again.');
                }
              },
            },
          ],
          'plain-text'
        );
      }
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      // Show an error message to the user
      Alert.alert(errorCode, errorMessage);
    }
  };

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
      <SafeAreaView style={{width: '100%', alignItems: "center", flex: 1, backgroundColor:"#fffcf7"}}>
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
          <TouchableOpacity onPress={handleSignUp}
            style={styles.button}>
            <Text style={styles.buttonText}>Create</Text>
          </TouchableOpacity>
        </View>
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
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
    alignItems: 'center',
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
    fontSize: 40,
    fontWeight: "bold",
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
  },
  screen: {
    backgroundColor: "#fffcf7",
  },
});