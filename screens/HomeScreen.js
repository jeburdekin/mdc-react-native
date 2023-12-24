import * as React from "react";
import { SafeAreaView, StyleSheet, View, Text, Button } from "react-native";
// import { useFonts, Pacifico_400Regular } from "@expo-google-fonts/pacifico";

// const styles = StyleSheet.create({});

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>User Home</Text>
      <Button title="+ Create New Survey" />
      <Button title="Drafts" />
      <Button title="Ready to Send" />
      <Button title="Sent" />
      <Button title="Download Survey" />
      <Button title="Notes" />
      <Button title="MDC Website" />
      <Button title="Feedback" />
      <Button
        title="Log Out"
        onPress={() => navigation.navigate("Make Deaths Count")}
      />
    </View>
  );
}
