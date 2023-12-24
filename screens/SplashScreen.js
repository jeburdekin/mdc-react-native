import * as React from "react";
import { SafeAreaView, StyleSheet, View, Text, Button } from "react-native";
import { useFonts, Pacifico_400Regular } from "@expo-google-fonts/pacifico";

const styles = StyleSheet.create({
  title: {
    fontSize: 60,
    color: "#948FBF",
  },
});

export default function SplashScreen({ navigation }) {
  let [fontsLoaded] = useFonts({
    Pacifico_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={{ flexDirection: "row" }}>
        <Text
          style={{
            fontFamily: "Pacifico_400Regular",
            fontSize: 60,
            color: "#D9695F",
          }}
        >
          M
        </Text>
        <Text style={styles.title}>ake</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text
          style={{
            fontFamily: "Pacifico_400Regular",
            fontSize: 60,
            color: "#D9695F",
          }}
        >
          D
        </Text>
        <Text style={styles.title}>eaths</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text
          style={{
            fontFamily: "Pacifico_400Regular",
            fontSize: 60,
            color: "#D9695F",
          }}
        >
          C
        </Text>
        <Text style={styles.title}>ount</Text>
      </View>
      <Button
        color="#D9695F"
        title="Sign In"
        onPress={() => navigation.navigate("Sign In")}
      />
      <Button
        color="#D9695F"
        title="Sign Up"
        onPress={() => navigation.navigate("Sign Up")}
      />
    </View>
  );
}
