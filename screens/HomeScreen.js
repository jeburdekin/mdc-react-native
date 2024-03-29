import * as React from "react";
import { SafeAreaView, StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
// import { useFonts, Pacifico_400Regular } from "@expo-google-fonts/pacifico";

// const styles = StyleSheet.create({});

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.background}>
      <Text>User Home</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Create Survery Screen")}
        style={styles.button}>
        <Text style={styles.buttonText}>Create Survery</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Drafts</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Ready to Send</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sent</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Downlaod Survey</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Notes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>MDC Website</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Feedback Screen")} style={styles.button}>
        <Text style={styles.buttonText}>Feedback</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Make Deaths Count")} style={styles.button}>
        <Text style={styles.buttonText}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  background : {
    backgroundColor: "#FFFFF0",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button : {
    backgroundColor: '#E57C63',
    width: 175,
    padding: 12,
    borderRadius:10,
    marginTop: 15,
  }
,
  buttonText : {
    textAlign: "center",
    color: "#202020",
    fontSize: 20,
  }
});
