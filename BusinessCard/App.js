import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Linking } from "react-native";
import { SafeAreaView } from "react-native";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.root}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("./assets/Images/business_image.jpg")}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.name}>Jeffrey Giglio</Text>
          <Text style={styles.text}
          onPress={ () => {Linking.openURL("mailto:jgiglio@coastal.edu")} }
          > jlgiglio@coastal.edu</Text>
          <Text style={styles.text}
          onPress={ () => {Linking.openURL("tel:8604804590")} }
          >(860)-480-4590</Text>
          <Text
            style={styles.text}
            onPress={() => {
              Linking.openURL("https://github.com/Jeffgigs/CSCI343_2026.git");
            }}
          >
            Github repo
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#bdbdbdff",
  },
  imageContainer: {},
  image: {},
  textContainer: {
    flex: 5,
    width: "100%",
    alignItems: "center",
  },
  name: {
    fontSize: 55,
    alignItems: "center",
    marginBottom: 100,
  },
  text: {
    textAlign: "center",
    fontSize: 25,
    fontStyle: "italic",
    marginBottom: 20,
  },
});
