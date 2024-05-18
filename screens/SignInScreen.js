import React, { useState, useCallback } from 'react';
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { Snackbar } from 'react-native-paper';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center", // Align children to the start of the screen
    alignItems: "center",
    backgroundColor: "#fffcf7",
  },
  container: {
    flex: 1, // Take up all available space
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fffcf7",
  },
  input: {
    height: 45,
    width: windowWidth * 0.7,
    margin: 8,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#E2E2E2",
  },
  button: {
    backgroundColor: '#E57C63',
    width: windowWidth * 0.45,
    height: windowHeight * 0.1,
    padding: 15,
    borderRadius: 10,
    margin: 10,
    bottom: -200,
  },
  buttonText: {
    flexWrap: "wrap",
    textAlign: "center",
    color: "#fffcf7",
    fontSize: 40,
    fontWeight: "bold",
  },
  map: {
    width: windowWidth * 1.0,
    height: windowHeight * 0.45,
    top: windowHeight * -0.335,
    //resizeMode: "stretch",
    position: "absolute",
  },
  whiteBlock1: {
    backgroundColor: "#FFFFFF",
    width: 300,
    height: 60,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    top: windowHeight * 0.161,
    alignItems: "center",
    zIndex: 1,
  },
  whiteBlock2: {
    backgroundColor: "#FFFFFF",
    width: 300,
    height: 60,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    top: windowHeight * 0.165,
    alignItems: "center",
    zIndex: 1,
  },
  orangeBlock: {
    backgroundColor: "#E57C63",
    width: windowWidth*0.9,
    height: windowHeight*0.3,
    borderRadius: 10,
    top: windowHeight * 0.04,
    position: "absolute",
  },
  title: {
    fontSize: 50,
    color: "#FFFFFF",
    fontFamily: "Pacifico_400Regular",
    zIndex: 2,
    top: windowHeight * 0.03,
    position: "absolute",
  },
  buttonBox: {
    flexDirection: "row",
  },
});


export default function SignInScreen({ navigation }) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  const [visible, setVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onChangeUser = useCallback((newUser) => {
    setUser(newUser);
  }, []);

  const onChangePassword = useCallback((newPassword) => {
    setPassword(newPassword);
  }, []);

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, user, password);
      navigation.navigate("User Home");
    } catch (error) {
      setErrorMessage("Invalid email or password");
      setVisible(true);    
    }
  };

  const handlePasswordReset = async () => {
    try {
      await sendPasswordResetEmail(auth, user);
      alert('Password reset link sent to your email');
    } catch (error) {
      setErrorMessage(error.message);
      setVisible(true);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >
      <SafeAreaView style={{ width: "100%", flex: 0 }}>
        <Image
          source={require("../assets/mdc-map.png")}
          style={styles.map}
        />
        <View style={{ alignItems: "center" }}>
          <Text style={styles.title}>Sign In</Text>
          <View style={styles.orangeBlock} />
          <View style={styles.whiteBlock1}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeUser}
              secureTextEntry={false}
              value={user}
              placeholder="Email Address or Phone Number"
            />
          </View>
          <View style={styles.whiteBlock2}>
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              placeholder="Password"
              onChangeText={onChangePassword}
              value={password}
            />
          </View>
          <View style={styles.buttonBox}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Make Deaths Count")}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleSignIn}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ position: 'absolute', top: 0, width: '100%' }}>
          <Snackbar
            visible={visible}
            onDismiss={() => setVisible(false)}
            action={{
              label: 'Close',
              onPress: () => {
                setVisible(false);
              },
            }}
          >
            {errorMessage}
          </Snackbar>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
