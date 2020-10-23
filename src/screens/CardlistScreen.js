import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
// Expo
import * as Location from "expo-location";
// Navigation
import { useIsFocused } from "@react-navigation/native";
// API
import { getLitterItems } from "../firebase/LitterCollectionAPI";
// Additional libs
import { getDistance } from "geolib";
// Styling
import styles from "../styles/styles";
// Custom stuff
import { Loading } from "../components/Loading";
import RaisedButton from "../components/RaisedButton";
import ListItem from "../components/ListItem";

export default CardlistScreen = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [data, setData] = useState(null);
  const isFocused = useIsFocused();

  const updateState = async () => {
    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
    getLitterItems(onLitterReceived);
  };

  onLitterReceived = (litterList) => {
    setData(
      litterList.sort((a, b) =>
        getDistance(location.coords, a.location) >
        getDistance(location.coords, b.location)
          ? 1
          : getDistance(location.coords, a.location) <
            getDistance(location.coords, b.location)
          ? -1
          : 0
      )
    );
  };

  useEffect(() => {
    let mounted = true;
    if (mounted && isFocused) {
      updateState();
    }
    return () => (mounted = false);
  }, [isFocused]);

  let cardListScreen = <Loading />;
  if (location) {
    let dumpCards = <View />;
    if (data) {
      dumpCards = data.map((element, index) => {
        return (
          <ListItem
            key={index}
            element={element}
            distance={getDistance(location.coords, element.location)}
            onPress={() =>
              navigation.navigate(
                element.cleaned ? "ViewTrashCleaned" : "ViewTrashNotCleaned",
                { data: element }
              )
            }
          />
        );
      });
    }

    cardListScreen = (
      <View style={{ flex: 1 }}>
        <ScrollView>{dumpCards}</ScrollView>
        <View style={styles.buttonBottomRaisedWrapper}>
          <RaisedButton
            onPress={() =>
              navigation.navigate("AddTrashCard", {
                location: location,
              })
            }
            text="Добавить"
            buttonStyle={styles.raisedButton}
            textStyle={styles.whiteTextSmall}
          />
        </View>
      </View>
    );
  }

  return <View style={{ flex: 1 }}>{cardListScreen}</View>;
};
