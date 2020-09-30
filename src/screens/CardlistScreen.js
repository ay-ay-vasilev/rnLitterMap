import React, { useState, useEffect } from "react";
import { View, ScrollView, Text } from "react-native";
import * as Location from "expo-location";
import { getDistance } from "geolib";
import { useIsFocused } from "@react-navigation/native";

import { Loading } from "../components/Loading";

import styles from "../styles/styles";
import RaisedButton from "../components/RaisedButton";
import ListItem from "../components/ListItem";

import { getLitterItems } from "../firebase/LitterCollectionAPI";
import { formatDateRelative } from "../utils/utils";

export default CardlistScreen = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [data, setData] = useState(null);
  const isFocused = useIsFocused();

  const updateState = async () => {
    getLitterItems(onLitterReceived);
    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  };

  onLitterReceived = (litterList) => {
    setData(litterList);
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
