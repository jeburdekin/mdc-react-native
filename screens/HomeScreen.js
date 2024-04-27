import * as React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Linking,
  Dimensions,
  ScrollView,
} from "react-native";
import { Button } from "react-native-paper";

// import { useFonts, Pacifico_400Regular } from "@expo-google-fonts/pacifico";
// const styles = StyleSheet.create({});

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#fffcf7",
    height: windowHeight,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#E57C63",
    width: windowWidth * 0.85,
    padding: 12,
    borderRadius: 20,
    marginTop: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 20
  },
  rectangle1: {
    zIndex: 1,
    backgroundColor: "#DFDFDF",
    opacity: 0.6,
    width: windowWidth,
    height: windowHeight / 9.5,
  },
  rectangle2: {
    backgroundColor: "#FFFFF0",
    width: windowWidth,
    height: windowHeight / 9.5,
    borderBlockColor: "#1D1D1D",
    borderBottomWidth: 4,
    position: "absolute",
  },
  imageTouch: {
    zIndex: 3,
    width: windowWidth / 6,
    height: windowWidth / 6,
    borderRadius: 30,
    top: windowHeight * 0.013,
    left: windowWidth * 0.75,
    position: "absolute",
  },
  image: {
    zIndex: 2,
    width: windowWidth / 6,
    height: windowWidth / 6,
    borderRadius: 30,
    top: windowHeight * 0.013,
    left: windowWidth * 0.775,
    position: "absolute",
  },
  logo: {
    zIndex: 1,
    width: windowWidth / 2,
    height: windowWidth / 5,
    top: windowHeight * 0.005,
    left: windowWidth * 0.2,
    position: "absolute",
  },
  buttonIcon: {
    color: "#FFFFFF",
    fontSize: 35,
    flex: 2,
  },
});

export default function HomeScreen({ navigation }) {
  return (
    <View style={{flex: 1}}>
      <View style={styles.rectangle2} />
      <View style={styles.rectangle1}></View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Profile Screen")}
        style={styles.imageTouch}
      ></TouchableOpacity>
      <Image source={require("../assets/Layer 1.png")} style={styles.image} />
      <Image
        source={require("../assets/mdc logo short.png")}
        style={styles.logo}
      />
      <ScrollView style={{flexGrow: 1}}>
        <View style={styles.background}>
          <SafeAreaView>
            <Button
              mode="elevated"
              style={styles.button}
              contentStyle={{ flexDirection: "row"}}
              icon="circle-edit-outline"
              labelStyle={styles.buttonIcon}
              onPress={() => navigation.navigate("Survey Manager")}
            >
              <Text style={styles.buttonText}>Create Survey</Text>
            </Button>
            <Button
              mode="elevated"
              style={styles.button}
              icon="clipboard-pulse-outline"
              labelStyle={styles.buttonIcon}
              onPress={() => navigation.navigate("Drafts Screen")}
            >
              <Text style={styles.buttonText}>Drafts</Text>
            </Button>
            <Button
              mode="elevated"
              style={styles.button}
              icon="clipboard-arrow-up-outline"
              labelStyle={styles.buttonIcon}
              onPress={() => navigation.navigate("Ready to Send")}
            >
              <Text style={styles.buttonText}>Ready to Send</Text>
            </Button>
            <Button
              mode="elevated"
              style={styles.button}
              icon="clipboard-check-multiple-outline"
              labelStyle={styles.buttonIcon}
              onPress={() => navigation.navigate("Sent Surveys")}
            >
              <Text style={styles.buttonText}>Sent Surveys</Text>
            </Button>
            <Button
              mode="elevated"
              style={styles.button}
              icon="cloud-download-outline"
              labelStyle={styles.buttonIcon}
              onPress={() => navigation.navigate("Download Surveys")}
            >
              <Text style={styles.buttonText}>Download Surveys</Text>
            </Button>
            <Button
              mode="elevated"
              style={styles.button}
              icon="book-open-page-variant-outline"
              labelStyle={styles.buttonIcon}
              onPress={() => navigation.navigate("Notes Screen")}
            >
              <Text style={styles.buttonText}>Notes</Text>
            </Button>
            <Button
              mode="elevated"
              style={styles.button}
              icon="compass-outline"
              labelStyle={styles.buttonIcon}
              onPress={() => Linking.openURL("https://www.makedeathscount.org")}
            >
              <Text style={styles.buttonText}>MDC Website</Text>
            </Button>
            <Button
              mode="elevated"
              style={styles.button}
              icon="comment-question-outline"
              labelStyle={styles.buttonIcon}
              onPress={() => navigation.navigate("Feedback Screen")}
            >
              <Text style={styles.buttonText}>Feedback</Text>
            </Button>
            <Button
              mode="elevated"
              style={styles.button}
              icon="logout"
              labelStyle={styles.buttonIcon}
              onPress={() => navigation.navigate("Make Deaths Count")}
            >
              <Text style={styles.buttonText}>Logout</Text>
            </Button>
          </SafeAreaView>
        </View>
      </ScrollView>
    </View>
  );
}
