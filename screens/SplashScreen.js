import * as React from "react";
import { SafeAreaView, StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import { useFonts, Pacifico_400Regular } from "@expo-google-fonts/pacifico";

const styles = StyleSheet.create({
  title: {
    fontSize: 60,
    color: "#948FBF",
    lineHeight: 110,
  },
  letters: {
    fontFamily: "Pacifico_400Regular",
    fontSize: 60,
    color: "#D9695F",
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

export default function SplashScreen({ navigation }) {
  let [fontsLoaded] = useFonts({
    Pacifico_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#fffcf7" }}>
      <View style={{ flexDirection: "row", marginBottom: -20 }}>
        <Text
          style={styles.letters}
        >
          M
        </Text>
        <Text style={styles.title}>ake</Text>
      </View>
      <View style={{ flexDirection: "row", marginBottom: -20  }}>
        <Text
          style={styles.letters}
        >
          D
        </Text>
        <Text style={styles.title}>eaths</Text>
      </View>
      <View style={{ flexDirection: "row", marginBottom: -20  }}>
        <Text
          style={styles.letters}
        >
          C
        </Text>
        <Text style={styles.title}>ount</Text>
      </View>

       <TouchableOpacity onPress={() => navigation.navigate("Sign In")} 
                style={{backgroundColor: '#D9695F', width: 175, padding: 12, borderRadius:10, marginTop: 40}}>
        <Text style={styles.buttonText}>Sign In</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate("Create Account")} 
                style={styles.button}>
        <Text style={styles.buttonText}>Create Account</Text>
    </TouchableOpacity>
    </View>
  );
}
