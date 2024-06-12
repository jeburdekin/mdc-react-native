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
  Modal,
  Alert,
  Platform,
} from "react-native";
import {
  Dialog,
  Portal,
  Button,
  TextInput as DialogInput,
} from "react-native-paper";
import RNPickerSelect from "react-native-picker-select";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPhoneNumber,
  RecaptchaVerifier,
} from "firebase/auth";
import DateTimePicker from "@react-native-community/datetimepicker";
import { set } from "react-hook-form";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function CreateAccountScreen({ navigation }) {
  const [user, onChangeUser] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [confirmPassword, onChangeConfirmPassword] = useState("");
  const [interviewerCode, onChangeInterviewerCode] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [age, setAge] = React.useState(null);
  const [birthDate, setBirthDate] = useState(""); // Make sure this line is uncommented
  const [location, setLocation] = React.useState("");

  const [date, setDate] = useState(new Date());
  const [tempDate, setTempDate] = useState(date);
  const [visible, setVisible] = useState(false);

  const [verificationCode, setVerificationCode] = React.useState("");

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const auth = getAuth();

  const handleSignUp = async () => {
    // Check if user, password, or confirmPassword is empty
    if (!user || !password || !confirmPassword) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    // Check if the user input is an email
    if (!user.includes("@")) {
      Alert.alert("Error", "Please enter a valid email address.");
      return;
    }

    try {
      // Sign up with email
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        user,
        password
      );
      // Signed in
      const userName = userCredential.user;
      // ...
      navigation.navigate("Make Deaths Count");
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
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

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

    <SafeAreaView
      style={{
        width: "100%",
        alignItems: "center",
        flex: 1,
        backgroundColor: "#fffcf7",
      }}
    >
      <Image
        source={require("../assets/MDC-logo long.png")}
        style={styles.logo}
      />

      <View style={styles.orangeGroup}>
        <View id="Group 1" style={styles.inputGroup1}>
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
        </View>
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 200 : 0}
        style={styles.inputGroup2}
        >
        <View id="Group 2" style={styles.inputGroup2}>
          <View style={[styles.whiteBlock1, { marginTop: 40 }]}>
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
            <TouchableOpacity onPress={showDatePicker} style={styles.input}>
              <Text
                style={{
                  alignContent: "center",
                  alignSelf: "center",
                  margin: 10,
                }}
              >
                {date.toDateString() || "Click to select birth date"}
              </Text>
            </TouchableOpacity>
            <Portal>
              <Dialog visible={visible} onDismiss={() => setVisible(false)}>
                <Dialog.Title>Select date</Dialog.Title>
                <Dialog.Content>
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={tempDate}
                    mode="date"
                    display="spinner"
                    onChange={handleConfirm}
                  />
                </Dialog.Content>
                <Dialog.Actions>
                  <Button onPress={hideDatePicker}>Cancel</Button>
                  <Button onPress={handleSetDate}>Confirm</Button>
                </Dialog.Actions>
              </Dialog>
            </Portal>
          </View>
          <View style={[styles.whiteBlock2, { marginTop: 0 }]}>
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
                  },
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
        </View>
        </KeyboardAvoidingView>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Make Deaths Count")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignUp} style={styles.button}>
          <Text style={styles.buttonText}>Create</Text>
        </TouchableOpacity>
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
    zIndex: 2,
  },
  pickerContainer: {
    height: 40,
    margin: 12,
    borderRadius: 10,
    backgroundColor: "#E2E2E2",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#E57C63",
    flex: 1,
    padding: windowWidth * 0.05,
    margin: windowWidth * 0.03,
    borderRadius: 10,
  },
  inputIOS: {
    fontSize: 14,
    textAlign: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    color: "black",
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 14,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    color: "black",
    paddingRight: 30,
  },
  buttonText: {
    textAlign: "center",
    color: "#fffcf7",
    fontSize: 30,
    fontWeight: "bold",
  },
  whiteBlock1: {
    backgroundColor: "#FFFFFF",
    width: windowWidth * 0.85,
    height: windowHeight * 0.07,
    marginTop: windowHeight * 0.01,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignSelf: "center",
    zIndex: 1,
  },
  whiteBlock2: {
    backgroundColor: "#FFFFFF",
    width: windowWidth * 0.85,
    height: windowHeight * 0.07,
    margin: windowHeight * 0.01,
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
  orangeGroup: {
    backgroundColor: "#E57C63",
    width: windowWidth * 0.9,
    height: windowHeight * 0.6,
    borderRadius: 10,
    flex: 7,
  },
  buttonContainer: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "flex-end",
    flex: 1.5,
  },
  logo: {
    width: windowWidth,
    resizeMode: "contain",
    justifyContent: "center",
    alignSelf: "center",
    flex: 1,
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
  inputGroup1: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  inputGroup2: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: windowHeight * 0.03,
  },
});
