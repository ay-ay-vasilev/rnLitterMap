import React, { useState, useEffect } from "react";
import { View, ScrollView, Text } from "react-native";
import * as Location from "expo-location";
import { getDistance } from "geolib";

import Loading from "../components/Loading";

import styles from "../styles/styles";
import RaisedButton from "../components/RaisedButton";
import ListItem from "../components/ListItem";

import { fakeData } from "../test/testData";

export default function CardlistScreen({ navigation }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      if (mounted) {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== "granted") {
          setErrorMsg("У приложения нет доступа к местоположению устройства.");
        }
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      }
    })();
    return () => (mounted = false);
  });

  let cardListScreen = <Loading />;
  if (errorMsg) {
    cardListScreen = (
      <View
        style={{
          flex: 1,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>{errorMsg}</Text>
      </View>
    );
  } else if (location) {
    let dumpCards = fakeData.map((element, index) => (
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
    ));
    cardListScreen = (
      <View style={{ flex: 1 }}>
        <ScrollView>{dumpCards}</ScrollView>
        <View style={styles.buttonBottomRaisedWrapper}>
          <RaisedButton
            onPress={() => navigation.navigate("AddTrashCard")}
            text="Добавить"
            buttonStyle={styles.raisedButton}
            textStyle={styles.whiteTextSmall}
          />
        </View>
      </View>
    );
  }

  return <View style={{ flex: 1 }}>{cardListScreen}</View>;
}
