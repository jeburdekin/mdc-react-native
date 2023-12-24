import * as React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts, Pacifico_400Regular } from "@expo-google-fonts/pacifico";

const styles = StyleSheet.create({
  title: {
    fontSize: 60,
    color: "#948FBF",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
  },
});

function SplashScreen({ navigation }) {
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

function SignInScreen({ navigation }) {
  const [user, onChangeUser] = React.useState("Email Address or Phone Number");
  const [password, onChangePassword] = React.useState("");

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Sign In</Text>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeUser}
          value={user}
        />
        <TextInput
          style={styles.input}
          secureTextEntry="true"
          placeholder="Password"
          onChangeText={onChangePassword}
          value={password}
        />
      </SafeAreaView>
      <Button
        title="Back to Home"
        onPress={() => navigation.navigate("Make Deaths Count")}
      />
      <Button
        title="Mock Sign In"
        onPress={() => navigation.navigate("User Home")}
      />
    </View>
  );
}

function SignUpScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Sign Up</Text>
      <Button
        title="Back to Home"
        onPress={() => navigation.navigate("Make Deaths Count")}
      />
    </View>
  );
}

function HomeScreen({ navigation }) {
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

function NonUserHomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>User Home</Text>
      <Button title="+ Create New Survey" />
      <Button title="Resources" />
      <Button title="MDC Website" />
      <Button title="Feedback" />
      <Button
        title="Back to Home"
        onPress={() => navigation.navigate("Make Deaths Count")}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Make Deaths Count">
        <Stack.Screen name="Make Deaths Count" component={SplashScreen} />
        <Stack.Screen name="Sign In" component={SignInScreen} />
        <Stack.Screen name="Sign Up" component={SignUpScreen} />
        <Stack.Screen name="User Home" component={HomeScreen} />
        <Stack.Screen name="Non-User Home" component={NonUserHomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
