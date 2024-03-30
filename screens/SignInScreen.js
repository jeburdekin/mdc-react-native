import * as React from "react";
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
} from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    padding: 12,
    borderRadius: 10,
    margin: 10,
    bottom: -200,
  },
  buttonText: {
    flexWrap: "wrap",
    textAlign: "center",
    color: "#fffcf7",
    fontSize: 40,
  },
  map: {
    width: windowWidth,
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
  const [user, onChangeUser] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  return (
    <KeyboardAvoidingView style={styles.container} keyboardVerticalOffset={100} behavior="padding">
      <SafeAreaView style={{width: '100%'}}>
        <Image
          source={require("../assets/mdc-map.png")}
          style={styles.map}
          />
        <View style={{alignItems: "center"}}>
          <Text style={styles.title}>Sign In</Text>
          <View style={styles.orangeBlock}/>
          <View style={styles.whiteBlock1}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeUser}
              secureTextEntry={true}
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
            <TouchableOpacity onPress={() => navigation.navigate("Make Deaths Count")}
              style={styles.button}>
              <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("User Home")}
              style={styles.button}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
