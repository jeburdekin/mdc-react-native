import * as React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts, Pacifico_400Regular } from "@expo-google-fonts/pacifico";

const styles = StyleSheet.create({
  title: {
    fontSize: 60,
    color: "#948FBF",
  },
});

function HomeScreen({ navigation }) {
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
        <Text style={styles.title}>ake </Text>
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
        <Text style={styles.title}>eaths </Text>
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
        title="Create Account"
        onPress={() => navigation.navigate("Create Account")}
      />
    </View>
  );
}

function SignInScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Sign In</Text>
      <Button
        title="Back to Home"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}

function CreateAccountScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Create Account</Text>
      <Button
        title="Back to Home"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Sign In" component={SignInScreen} />
        <Stack.Screen name="Create Account" component={CreateAccountScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
