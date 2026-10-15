import {
  Button,
  ImageBackground,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import DateTimePicker from "@react-native-community/datetimepicker";

import Title from "../components/Title";
import NavButton from "../components/NavButton";
import Colors from "../constants/colors";
import WheelPicker from "react-native-wheely";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  const [checkIn, setCheckIn] = useState(new Date());
  const [showCheckIn, setShowCheckIn] = useState(false);

  function showCheckInPicker() {
    setShowCheckIn(true);
  }

  function hideCheckInPicker() {
    setShowCheckIn(false);
  }

  function onChangeCheckIn(event, selectedDate) {
    const currentDate = selectedDate;
    if (Platform.OS === "android") {
      hideCheckInPicker();
    }
    setCheckIn(currentDate);
  }

  const [checkOut, setCheckOut] = useState(new Date());
  const [showCheckOut, setShowCheckOut] = useState(false);

  function showCheckOutPicker() {
    setShowCheckOut(true);
  }

  function hideCheckOutPicker() {
    setShowCheckOut(false);
  }

  function onChangeCheckOut(event, selectedDate) {
    const currentDate = selectedDate;
    if (Platform.OS === "android") {
      hideCheckOutPicker();
    }
    setCheckOut(currentDate);
  }

  const guestCounts = [1, 2, 3, 4, 5, 6, 7, 8];
  const [numGuests, setNumGuests] = useState(0);
  const [showNumGuests, setShowNumGuests] = useState(false);

  function showNumGuestsPicker() {
    setShowNumGuests(true);
  }

  function hideNumGuestsPicker() {
    setShowNumGuests(false);
  }

  function onChangeNumGuests(index) {
    setNumGuests(index);
  }

  const bedCounts = [1, 2, 3, 4];
  const [numbeds, setNumbeds] = useState(0);
  const [showNumbeds, setShowNumbeds] = useState(false);

  function showNumbedsPicker() {
    setShowNumbeds(true);
  }

  function hideNumbedsPicker() {
    setShowNumbeds(false);
  }

  function onChangeNumbeds(index) {
    setNumbeds(index);
  }

  const [results, setResults] =useState("");

  function onReserveHandler(){
    let res = 'Check In:\t\t${CheckIn.toDateString()}\n';
    res = res + 'Check Out:\t\t${CheckOut.toDateString()}\n';
    res = res + 'Number of Guests:\t\t${guestCounts[numGuests]}\n';
    res = res + 'Number of Beds:\t\t${bedCounts[numBeds]}\n';
  }

  return (
    <ImageBackground
      source={require("../assets/images/camping.jpg")}
      resizeMode="cover"
      style={styles.rootContainer}
      imageStyle={styles.backgroundImage}
    >
      <View
        style={[
          styles.rootContainer,
          {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
          },
        ]}
      >
        <View style={styles.titleContainer}>
          <Title>Rivera Retreat</Title>
        </View>

        <View style={styles.rowContainer}>
          <View style={styles.dateContainer}>
            <Text style={styles.dateLabel}>Check In:</Text>
            <Pressable onPress={showCheckInPicker}>
              <Text style={styles.dateText}>{checkIn.toDateString()}</Text>
            </Pressable>
          </View>

          <View style={styles.dateContainer}>
            <Text style={styles.dateLabel}>Check Out:</Text>
            <Pressable onPress={showCheckOutPicker}>
              <Text style={styles.dateText}>{checkOut.toDateString()}</Text>
            </Pressable>
          </View>
        </View>

        <View>
          {showCheckIn && Platform.OS === "android" && (
            <DateTimePicker
              testID="dateTimePicker1"
              value={checkIn}
              mode={"date"}
              display="spinner"
              onChange={onChangeCheckIn}
            />
          )}
          {showCheckIn && Platform.OS === "ios" && (
            <Modal
              animationType="slide"
              transparent={true}
              supportedOrientations={["portrait", "landscape"]}
            >
              <View style={styles.centeredModalView}>
                <View style={styles.modalView}>
                  <DateTimePicker
                    testID="dateTimePicker2"
                    value={checkIn}
                    mode={"date"}
                    display="spinner"
                    onChange={onChangeCheckIn}
                  />

                  <Button title="Confirm" onPress={hideCheckInPicker} />
                </View>
              </View>
            </Modal>
          )}

          {showCheckOut && Platform.OS === "android" && (
            <DateTimePicker
              testID="dateTimePicker3"
              value={checkOut}
              mode={"date"}
              display="spinner"
              onChange={onChangeCheckOut}
            />
          )}
          {showCheckIn && Platform.OS === "ios" && (
            <Modal
              animationType="slide"
              transparent={true}
              supportedOrientations={["portrait", "landscape"]}
            >
              <View style={styles.centeredModalView}>
                <View style={styles.modalView}>
                  <DateTimePicker
                    testID="dateTimePicker4"
                    value={checkOut}
                    mode={"date"}
                    display="spinner"
                    onChange={onChangeCheckOut}
                  />

                  <Button title="Confirm" onPress={hideCheckOutPicker} />
                </View>
              </View>
            </Modal>
          )}
        </View>

        <View style={styles.rowContainer}>
          <Text style={styles.dateLabel}>Number of Guests:</Text>
          <Pressable onPress={showNumGuestsPicker}>
            <View style={styles.dateTextContainer}>
              <Text style={styles.dateText}>{guestCounts[numGuests]}</Text>
            </View>
          </Pressable>

          <Modal
          animationType="slide"
          transparent={true}
          visable={showNumGuests}
          supportedOrientations={["portrait", "landscape"]}
          >
            <View style={styles.centeredModalView}>
                <View style={styles.modalView}>
                    <Text style={styles.dateText}>Enter Number Of Guests:</Text>
                    <WheelPicker
                    selectedIndex={numGuests}
                    options={guestCounts}
                    onChange={onChangeNumGuests}
                    containerStyle={{ width: 200}}
                    />
                    <Button title="Confirm" onPress={hideNumGuestsPicker} />
                </View>
            </View>
          </Modal>
        </View>

        <View style={styles.rowContainer}>
          <Text style={styles.dateLabel}>Number of Beds:</Text>
          <Pressable onPress={showNumbedsPicker}>
            <View style={styles.dateTextContainer}>
              <Text style={styles.dateText}>{bedCounts[numbeds]}</Text>
            </View>
          </Pressable>

          <Modal
          animationType="slide"
          transparent={true}
          visable={showNumbeds}
          supportedOrientations={["portrait", "landscape"]}
          >
            <View style={styles.centeredModalView}>
                <View style={styles.modalView}>
                    <Text style={styles.dateText}>Enter Number Of Beds:</Text>
                    <WheelPicker
                    selectedIndex={numbeds}
                    options={bedCounts}
                    onChange={onChangeNumbeds}
                    containerStyle={{ width: 200}}
                    />
                    <Button title="Confirm" onPress={hideNumbedsPicker} />
                </View>
            </View>
          </Modal>
        </View>

        <View style={styles.buttonContainer}>
            <NavButton onPress={onReserveHandler}>Reserve Now</NavButton>
        </View>

        <View style={styles.resultsContainer}>
            <Text style={styles.results}>{results}</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  backgroundImage: {
    opacity: 0.3,
  },
  titleContainer: {
    padding: 7,
    marginVertical: 20,
    marginHorizontal: 20,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: Colors.primary500,
    backgroundColor: Colors.primary300,
    width: 400,
  },

  scrollContainer: {
    //todo
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 20,
    marginBottom: 20,
  },
  dateContainer: {
    backgroundColor: Colors.primary300o5,
    padding: 10,
  },
  dateLabel: {
    color: Colors.primary500,
    fontFamily: "Camp",
    textShadowColor: "black",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
  dateTextContainer: {
    backgroundColor: Colors.primary300o5,
    padding: 10,
    paddingHorizontal: 30,
  },
  dateText: {
    color: Colors.primary800,
    fontSize: 20,
    fontWeight: "bold",
  },
  centeredModalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: Colors.primary300,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
