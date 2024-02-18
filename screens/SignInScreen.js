import * as React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    width: 250,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
  },
  button: {
    backgroundColor: '#D9695F',
    width: 175,
    padding: 12,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    textAlign: "center",
    color: "#fffcf7",
    fontSize: 20,
  },
  image: {
    width: 100, 
    height: 100,
    resizeMode: 'contain', 
  }
});

export default function SignInScreen({ navigation }) {
  const [user, onChangeUser] = React.useState("Email Address or Phone Number");
  const [password, onChangePassword] = React.useState("");

  return (
    <View style={styles.container}>
      <SafeAreaView style={{width: '100%', alignItems: "center"}}>
        <Text>Sign In</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeUser}
          value={user}
          placeholder="Email Address or Phone Number"
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true} 
          placeholder="Password"
          onChangeText={onChangePassword}
          value={password}
        />
        <TouchableOpacity onPress={() => navigation.navigate("Make Deaths Count")}
          style={styles.button}>
          <Text style={styles.buttonText}>Back to Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("User Home")}
          style={styles.button}>    
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}
