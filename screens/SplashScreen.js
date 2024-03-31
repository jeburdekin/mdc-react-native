import * as React from "react";
import { SafeAreaView, StyleSheet, View, Text, Button, TouchableOpacity, Dimensions} from "react-native";
import { useFonts, Pacifico_400Regular } from "@expo-google-fonts/pacifico";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  splashArt: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fffcf7",
  },
  title: {
    fontSize: 60,
    color: "#948FBF",
    lineHeight: 110,
  },
  letters: {
    fontFamily: "Pacifico_400Regular",
    fontSize: 60,
    color: "#E57C63",
  },
  button1: {
    backgroundColor: '#E57C63', width: windowWidth * 0.75, padding: 12, borderRadius:10, marginTop: 20,
  },
  button2: {
    backgroundColor: '#E57C63', width: windowWidth * 0.75, padding: 12, borderRadius:10, marginTop: 20,
  },
  buttonText: {
    textAlign: "center",
    color: "#fffcf7",
    fontSize: 30,
  }
});

export default function SplashScreen({ navigation }) {
  let [fontsLoaded] = useFonts({
    Pacifico_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.splashArt}>
      <View style={{ flexDirection: "row", marginBottom: -20 }}>
        <Text
          style={styles.letters}
        >
          M
        </Text>
        <Text style={styles.title}>ake</Text>
      </View>
      <View style={{ flexDirection: "row", marginBottom: -20 }}>
        <Text
          style={styles.letters}
        >
          D
        </Text>
        <Text style={styles.title}>eaths</Text>
      </View>
      <View style={{ flexDirection: "row", marginBottom: 50 }}>
        <Text
          style={styles.letters}
        >
          C
        </Text>
        <Text style={styles.title}>ount</Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Sign In")}
        style={styles.button1}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Create Account")}
        style={styles.button2}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
}
