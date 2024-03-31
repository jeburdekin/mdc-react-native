import * as React from "react";
import { SafeAreaView, StyleSheet, View, Text, Button, TouchableOpacity, Image, Linking, Dimensions} from "react-native";
// import { useFonts, Pacifico_400Regular } from "@expo-google-fonts/pacifico";

// const styles = StyleSheet.create({});

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  background : {
    backgroundColor: "#FFFFF0",
    height: windowHeight,
    alignItems: "center",
  },
  button : {
    backgroundColor: '#E57C63',
    width: windowWidth * 0.75,
    padding: 12,
    borderRadius:10,
    marginTop: 20,
  },
  buttonText : {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 20,
  },
  rectangle1 : {
    zIndex: 1,
    backgroundColor: "#DFDFDF",
    opacity: 0.6,
    width: windowWidth,
    height: windowHeight/9.5
  },
  rectangle2 : {
    backgroundColor: "#FFFFF0",
    width: windowWidth,
    height: windowHeight/9.5,
    borderBlockColor: "#1D1D1D",
    borderBottomWidth: 4,
    position: "absolute",
  },
  imageTouch: {
    zIndex: 3,
    width: windowWidth/6,
    height: windowWidth/6,
    borderRadius: 30,
    top: windowHeight * 0.013,
    left: windowWidth * 0.75,
    position: "absolute",
  },
  image : {
    zIndex: 2,
    width: windowWidth/6,
    height: windowWidth/6,
    borderRadius: 30,
    top: windowHeight * 0.013,
    left: windowWidth * 0.775,
    position: "absolute",
  },
  logo : {
    zIndex: 1,
    width: windowWidth/2,
    height: windowWidth/5,
    top: windowHeight * 0.005,
    left: windowWidth * 0.2,
    position: "absolute",
  }
});

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <View style={styles.rectangle2}/>
      <View style={styles.rectangle1}>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Profile Screen")} style={styles.imageTouch}>
      </TouchableOpacity>
      <Image source={require ("../assets/Layer 1.png")} style={styles.image}/>
      <Image source={require ("../assets/mdc logo short.png")} style={styles.logo}/>
      <View style={styles.background}>
        <SafeAreaView>
          <TouchableOpacity onPress={() => navigation.navigate("Survey Manager")} style={styles.button}>
            <Text style={styles.buttonText}>Create Survery</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Drafts Screen")} style={styles.button}>
            <Text style={styles.buttonText}>Drafts</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Ready to Send")} style={styles.button}>
            <Text style={styles.buttonText}>Ready to Send</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Sent Surveys")} style={styles.button}>
            <Text style={styles.buttonText}>Sent</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Download Surveys")} style={styles.button}>
            <Text style={styles.buttonText}>Download Survey</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Notes Screen")} style={styles.button}>
            <Text style={styles.buttonText}>Notes</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.makedeathscount.org')} style={styles.button}>
            <Text style={styles.buttonText}>MDC Website</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Feedback Screen")} style={styles.button}>
            <Text style={styles.buttonText}>Feedback</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Make Deaths Count")} style={styles.button}>
            <Text style={styles.buttonText}>Log out</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    </View>
  );
}
