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
  button: {
    backgroundColor: '#D9695F',
    height: 40,
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 12,
    borderRadius: 4, // Optional: for rounded corners
  },
  buttonText: {
    color: 'white', // Ensures text is visible on the button
    fontSize: 16,
  },
});

export default function NoteScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <Text>Notes (Folders) </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Notes Folder")}
        >
          <Text style={styles.buttonText}>Notes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Recently Deleted Folder")}
        >
          <Text style={styles.buttonText}>Recently Deleted</Text>
        </TouchableOpacity>
      </View>
    );
  }


