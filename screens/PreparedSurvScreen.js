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
    height: 40,
    width: 250,
    margin: 12,
  }
});

export default class PreparedSurvScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Ready Surveys Screen</Text>
      </View>
    );
  }
}
