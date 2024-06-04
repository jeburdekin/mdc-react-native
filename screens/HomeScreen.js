import React, { useRef } from 'react';
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
  Animated,
} from "react-native";
import { Button, BottomNavigation } from "react-native-paper";

// import { useFonts, Pacifico_400Regular } from "@expo-google-fonts/pacifico";
// const styles = StyleSheet.create({});

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#fffcf7",
    alignItems: "center",
    flex: 1,
  },
  button: {
    backgroundColor: "#E57C63",
    width: windowWidth * 0.85,
    padding: windowWidth * 0.04,
    borderRadius: 20,
    margin: windowHeight * 0.015,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 20
  },
  titleBox: {
    backgroundColor: "#ecece5",
    borderBlockColor: "#8c8c8c",
    borderBottomWidth: 5,
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
  },
  imageTouch: {
    zIndex: 3,
    width: windowWidth / 6,
    height: windowWidth / 6,
    borderRadius: 40,
    top: windowHeight * 0.013,
    left: windowWidth / 10,
    flex: 1,
  },
  image: {
    zIndex: 2,
    width: windowWidth / 6,
    height: windowWidth / 6,
    borderRadius: 30,
    right: windowWidth / 15,
    top: windowHeight * 0.013,    
  },
  logo: {
    zIndex: 1,
    width: windowWidth / 2,
    height: windowWidth / 5,
    left: windowWidth / 10,
    flex: 4,
    alignSelf: "center",
  },
  buttonIcon: {
    color: "#FFFFFF",
    fontSize: 35,
    flex: 2,
  },
});

const HomeRoute = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Home</Text>
  </View>
);

const SentSurveysRoute = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Sent Surveys</Text>
  </View>
);

const DownloadSurveysRoute = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Download Surveys</Text>
  </View>
);

const NotesRoute = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Notes</Text>
  </View>
);

const MyBottomNavigation = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'sentSurveys', title: 'Sent Surveys', icon: 'email' },
    { key: 'downloadSurveys', title: 'Download Surveys', icon: 'download' },
    { key: 'notes', title: 'Notes', icon: 'note' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    sentSurveys: SentSurveysRoute,
    downloadSurveys: DownloadSurveysRoute,
    notes: NotesRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      activeColor="#E57C63" // color for the active label and icon
      inactiveColor="#828282" // color for the inactive label and icon
      barStyle={{ backgroundColor: '#fffcf7', borderTopWidth: 1, borderTopColor: '#E57C63' }} // custom styles for the bottom navigation bar
    />
  );
};


export default function HomeScreen({ navigation }) {
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    
    <View style={{ flex: 1, backgroundColor: "#fffcf7" }}>
      <Animated.ScrollView
      style={{backgroundColor: "#fffcf7", width: windowWidth, overflow: 'scroll', flex: 1}}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: true }
      )}
      scrollEventThrottle={16}
      >
        <Animated.View
          style={{
            flex: 1,
            opacity: scrollY.interpolate({
              inputRange: [0, 60],
              outputRange: [1, 0],
              extrapolate: 'clamp',
            }),
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [10, 130],
                  outputRange: [0, -50],
                  extrapolate: 'clamp',
                }),
              },
            ],
            
          }}
        >
          <View style={styles.titleBox}>
            <Image
              source={require("../assets/mdc logo short.png")}
              style={styles.logo}
            />

            <TouchableOpacity
              onPress={() => navigation.navigate("Profile Screen")}
              style={styles.imageTouch}
            >
            </TouchableOpacity>
            <Image source={require("../assets/Layer 1.png")} style={styles.image} />
          </View>
        </Animated.View>
        <View style={styles.background}>
          <SafeAreaView>
            <Button
              mode="elevated"
              style={[styles.button, {marginTop: windowHeight * 0.03}]}
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
              onPress={() => navigation.navigate("Draft Screen")}
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
              style={[styles.button, {marginBottom: windowHeight * 0.03}]}
              icon="logout"
              labelStyle={styles.buttonIcon}
              onPress={() => navigation.navigate("Make Deaths Count")}
            >
              <Text style={styles.buttonText}>Logout</Text>
            </Button>
          </SafeAreaView>
        </View>      
      </Animated.ScrollView>
    </View>
  );
}
