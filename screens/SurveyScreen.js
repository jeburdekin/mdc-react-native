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
    backgroundColor: "#fffcf7",
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
    marginTop: 15,
  },
  buttonText: {
    textAlign: "center",
    color: "#fffcf7",
    fontSize: 20,
  },
});

export default function SurveyScreen({ navigation }) {
  return (
    <View style={styles.container}>
    <SafeAreaView style={{width: '100%', alignItems: "center"}}>
        <Text style={styles.buttonText}>Question 1</Text>
        <TextInput
            style={styles.input}
            placeholder="Answer 1"
            keyboardType="default"
            multiline
            numberOfLines={4}
        />
        <Text style={styles.buttonText}>Question 2</Text>
        <TextInput
            style={styles.input}
            placeholder="Answer 2"
            keyboardType="default"
            multiline
            numberOfLines={4}
        />
        <Text style={styles.buttonText}>Question 3</Text>
        <TextInput
            style={styles.input}
            placeholder="Answer 3"
            keyboardType="default"
            multiline
            numberOfLines={4}
        />
        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Create Survery Screen")}
        >
            <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
    </SafeAreaView>
    </View>
  );
}
