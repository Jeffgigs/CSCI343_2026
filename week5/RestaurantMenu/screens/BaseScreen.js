import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Linking, Button } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Title from '../components/Title';

export default function BaseScreen(props) {
    // Setting Safe Area Screen Boundaries  
    const insets = useSafeAreaInsets();

  return (<View
  style={[
    styles.rootContainer,
    {
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right
    },
  ]}
>
    <View style={styles.titleContainer}>
        <Title> Mcdonalds</Title>
    </View>

    <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/images/mcdonalds.jpeg")}/>
    </View>

    <View style={styles.infoContainer}>
        <Text
        style={styles.infoText}
        onPress={() => Linking.openURL("tel:8432343096")}
        >
        843-234-3096
        </Text>

        <Text 
        style={styles.infoText}
        onPress={() =>
            Linking.openURL("https://www.google.com/maps/place/McDonald's/@33.7779981,-79.0207395,17z/data=!3m1!4b1!4m6!3m5!1s0x89001334958b2e43:0x3b0cb1d2b42e3489!8m2!3d33.7779981!4d-79.0207395!16s%2Fg%2F1tgcsr9b?entry=ttu&g_ep=EgoyMDI2MDkyMS4wIKXMDSoASAFQAw%3D%3D")
        }
    >
        1467 SC-544{"\n"} Conway{"\n"} SC 29526
        </Text>

        <Text 
        style={styles.infoText}
        onPress={() =>
            Linking.openURL("https://www.mcdonalds.com/us/en-us/location/SC/CONWAY/1467-HIGHWAY-544/27241.html?cid=RF:YXT:GMB::Clicks")
        }
    >
        www.Mcdonalds.com
        </Text>
    </View>

    <View style={styles.butttonContainer}>
        <Button title="View Menu" onPress={props.onNext}/>
    </View>
</View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center"
  },
  imageContainer: {
    flex: 4,
  },
  image: {
    resizeMode: "cover",
    height: "100%",
    width: 380
  },
  infoContainer: {
    flex: 3,
    justifyContent: "center"
  },
  infoText: {
    fontSize: 30,
    textAlign: "center",
    padding: 7
  },
  butttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 40,
    width: 150
  }
});
