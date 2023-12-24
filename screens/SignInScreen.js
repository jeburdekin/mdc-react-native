import * as React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
} from "react-native";

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
  },
});

export default function SignInScreen({ navigation }) {
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
