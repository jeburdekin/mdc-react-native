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
import DatePicker from "react-native-date-picker";

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
    borderWidth: 0,
    padding: 10,
    fontSize: 14,
    backgroundColor: "white",
  },
  pickerContainer: { 
    height: 40,
    margin: 12,
    borderWidth: 1,
    backgroundColor: "white", 
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
  const [gender, setGender] = React.useState("");
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

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
          onChangeText={onChangePassword}
          value={password}
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Interviewer code, if applicable"
          placeholderTextColor="black"
          onChangeText={onChangePassword}
          value={password}
        />
        <Button title="Click to select age" onPress={() => setOpen(true)} />
        <DatePicker
          modal
          open={open}
          date={date}
          mode="date"
          onConfirm={(date) => {
            setOpen(false)
            setDate(date)
         }}
          onCancel={() => {
            setOpen(false)
          }}
        />
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