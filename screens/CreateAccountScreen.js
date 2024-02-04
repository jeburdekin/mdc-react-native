import * as React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity
} from "react-native";

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
  },
  button: {
    backgroundColor: '#D9695F', width: 175, padding: 12, borderRadius:10, marginTop: 20,
  },
  buttonText: {
    textAlign: "center",
    color: "#fffcf7",
    fontSize: 20,
  }
});

export default function CreateAccountScreen({ navigation }) {
  const [user, onChangeUser] = React.useState("Email Address or Phone Number");
  const [password, onChangePassword] = React.useState("");

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Sign In</Text>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeUser}
          value={user}
        />
        <TextInput
          style={styles.input}
          // secureTextEntry="true"
          placeholder="Password"
          onChangeText={onChangePassword}
          value={password}
        />
      </SafeAreaView>
      <TouchableOpacity onPress={() => navigation.navigate("Make Deaths Count")}
        style={styles.button}>
        <Text style={styles.buttonText}>Back to Home</Text>
        </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("User Home")}
        style={styles.button}>    
      <Text style={styles.buttonText}>Create Account</Text></TouchableOpacity>
    </View>
  );
}
