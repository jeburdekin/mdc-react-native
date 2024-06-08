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
    alignSelf: "center",
    backgroundColor: "#fffcf7",
  },
  container: {
    flex: 1, // Take up all available space
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fffcf7",
  },
  input1: {
    height: windowHeight * 0.065,
    width: windowWidth * 0.75,
    marginTop: windowHeight * 0.0125,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 10,
    backgroundColor: "#E2E2E2",

  },
  input2: {
    height: windowHeight * 0.065,
    width: windowWidth * 0.75,
    marginTop: windowHeight * 0.0125,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 10,
    backgroundColor: "#E2E2E2",
  },
  button: {
    backgroundColor: '#E57C63',
    width: windowWidth * 0.45,
    height: windowHeight * 0.1,
    borderRadius: 10,
    margin: 8,
    justifyContent: "center",
  },
  buttonText: {
    flexWrap: "wrap",
    textAlign: "center",
    color: "#fffcf7",
    fontSize: windowHeight * 0.05,
    fontWeight: "bold",
  },
  whiteBlock1: {
    backgroundColor: "#FFFFFF",
    width: windowWidth * 0.8,
    height: windowHeight * 0.09,
    marginBottom: windowHeight * 0.01,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: "center",
    zIndex: 1,
  },
  whiteBlock2: {
    backgroundColor: "#FFFFFF",
    width: windowWidth * 0.8,
    height: windowHeight * 0.09,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: "center",
    zIndex: 1,
  },
  orangeBlock: {
    backgroundColor: "#E57C63",
    width: windowWidth*0.9,
    height: windowHeight*0.35,
    borderRadius: 10,
    zIndex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: windowHeight * 0.075,
    color: "#FFFFFF",
    fontFamily: "Pacifico_400Regular",
    bottom: windowHeight * 0.01,
    zIndex: 2,
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
      <SafeAreaView style={{ flex: 1 }}>
        <Image
          source={require("../assets/mdc-map.png")}
          style={{
            flex: 2,
            width: windowWidth * 1.25,
            zIndex: 0,
          }}
        />
        <View id="middle segment" style={{ alignItems: "center", flex: 2, marginBottom: windowHeight * 0.05 }}>
          <View style={styles.orangeBlock}>
            <Text style={styles.title}>Sign In</Text>
            <View style={styles.whiteBlock1}>
              <TextInput
                style={styles.input1}
                onChangeText={onChangeUser}
                secureTextEntry={false}
                value={user}
                placeholder="Email Address or Phone Number"
              />
            </View>
            <View style={styles.whiteBlock2}>
              <TextInput
                style={styles.input2}
                secureTextEntry={true}
                placeholder="Password"
                onChangeText={onChangePassword}
                value={password}
              />
          </View>
          </View>
        </View>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: "center"
        }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Make Deaths Count")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            // Disabling sign in until rest of app is developed onPress={handleSignIn}
            onPress={() =>  navigation.navigate("User Home")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
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
