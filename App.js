import * as React from "react";
// import { SafeAreaView, StyleSheet, View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./screens/SplashScreen";
import SignInScreen from "./screens/SignInScreen";
import CreateAccountScreen from "./screens/CreateAccountScreen";
import HomeScreen from "./screens/HomeScreen";
import FeedbackScreen from './screens/FeedbackScreen';
import SurveyScreen from './screens/SurveyScreen';
import ProfileScreen from './screens/ProfileScreen';
import NoteScreen from "./screens/NoteScreen";
import DraftScreen from "./screens/DraftScreen";
import PreparedSurvScreen from "./screens/PreparedSurvScreen";
import SentSurvScreen from "./screens/SentSurvScreen";
import DownloadSurveyScreen from "./screens/DownloadSurvScreen";
import SurveyCreatorScreen from "./screens/SurveyCreatorScreen";
import { Provider as PaperProvider } from 'react-native-paper';
import store from './Redux/Store';
import { Provider } from 'react-redux';
// import { useFonts, Pacifico_400Regular } from "@expo-google-fonts/pacifico";

// const styles = StyleSheet.create({});

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvbBQCf_up95nISfQTSgCFOYPO0UCLC50",
  authDomain: "mdc-app-proto.firebaseapp.com",
  databaseURL: "https://mdc-app-proto-default-rtdb.firebaseio.com",
  projectId: "mdc-app-proto",
  storageBucket: "mdc-app-proto.appspot.com",
  messagingSenderId: "282104773616",
  appId: "1:282104773616:web:808ef9cf1b873b79de3b35",
  measurementId: "G-Z5FQKMHPLN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Make Deaths Count">
            <Stack.Screen name="Make Deaths Count" component={SplashScreen} />
            <Stack.Screen name="Sign In" component={SignInScreen} />
            <Stack.Screen name="Create Account" component={CreateAccountScreen} />
            <Stack.Screen name="User Home" component={HomeScreen} />
            <Stack.Screen name="Feedback Screen" component={FeedbackScreen} />
            <Stack.Screen name="Survey Manager" component={SurveyCreatorScreen} />
            <Stack.Screen name="Profile Screen" component={ProfileScreen} />
            <Stack.Screen name="Notes Screen" component={NoteScreen} />
            <Stack.Screen name="Draft Screen" component={DraftScreen} />
            <Stack.Screen name="Ready to Send" component={PreparedSurvScreen} />
            <Stack.Screen name="Sent Surveys" component={SentSurvScreen} />
            <Stack.Screen name="Download Surveys" component={DownloadSurveyScreen} />
            <Stack.Screen name="Survey Screen" component={SurveyScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}

export default App;
