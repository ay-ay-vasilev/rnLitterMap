import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import MapView from "react-native-maps";

import RaisedButton from "../components/RaisedButton";
import * as Location from "expo-location";

import styles from "../styles/styles";

export default function MapScreen({ navigation }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("У приложения нет доступа к местоположению устройства.");
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  });

  let mapScreen = (
    <View style={styles.container}>
      <Text>Waiting..</Text>
    </View>
  );
  if (errorMsg) {
    mapScreen = (
      <View style={styles.container}>
        <Text>{errorMsg}</Text>
      </View>
    );
  } else if (location) {
    let coords = JSON.stringify(location);
    mapScreen = (
      <View style={styles.container}>
        <MapView
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={styles.map}
        />
        <View style={styles.buttonBottomRaised}>
          <RaisedButton navigation={navigation} path="Map" text="Добавить" />
        </View>
      </View>
    );
  }

  return <View style={styles.container}>{mapScreen}</View>;
}
