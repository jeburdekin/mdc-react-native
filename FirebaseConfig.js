import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvbBQCf_up95nISfQTSgCFOYPO0UCLC50",
  authDomain: "mdc-app-proto.firebaseapp.com",
  projectId: "mdc-app-proto",
  storageBucket: "mdc-app-proto.appspot.com",
  messagingSenderId: "282104773616",
  appId: "1:282104773616:web:808ef9cf1b873b79de3b35",
  measurementId: "G-Z5FQKMHPLN"
};

// Initialize Firebase
export const FIREBASE_MDC = initializeApp(firebaseConfig);

// Initialize Firebase Auth with AsyncStorage for persistence
export const auth = initializeAuth(FIREBASE_MDC, {
  persistence: getReactNativePersistence(AsyncStorage)
});

const analytics = getAnalytics(FIREBASE_MDC);



