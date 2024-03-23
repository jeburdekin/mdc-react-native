import * as React from "react";
// import { SafeAreaView, StyleSheet, View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./screens/SplashScreen";
import SignInScreen from "./screens/SignInScreen";
import CreateAccountScreen from "./screens/CreateAccountScreen";
import HomeScreen from "./screens/HomeScreen";
import FeedbackScreen from './screens/FeedbackScreen';
// import { useFonts, Pacifico_400Regular } from "@expo-google-fonts/pacifico";

// const styles = StyleSheet.create({});

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Make Deaths Count">
        <Stack.Screen name="Make Deaths Count" component={SplashScreen} />
        <Stack.Screen name="Sign In" component={SignInScreen} />
        <Stack.Screen name="Create Account" component={CreateAccountScreen} />
        <Stack.Screen name="User Home" component={HomeScreen} />
        <Stack.Screen name="Feedback Screen" component={FeedbackScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
