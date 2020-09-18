import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import MapView, { AnimatedRegion } from "react-native-maps";

import RaisedButton from "../components/RaisedButton";
import CustomFAB from "../components/CustomFAB";
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

  function goToInitialLocation() {
    let initialRegion = Object.assign({}, location);
    initialRegion["latitudeDelta"] = 0.005;
    initialRegion["longitudeDelta"] = 0.005;
    this.mapView.animateToRegion(initialRegion, 2000);
  }

  let mapScreen = (
    <View style={styles.container}>
      <Text>Загрузка</Text>
    </View>
  );
  if (errorMsg) {
    mapScreen = (
      <View style={styles.container}>
        <Text>{errorMsg}</Text>
      </View>
    );
  } else if (location) {
    mapScreen = (
      <View style={styles.container}>
        <MapView
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
          style={styles.map}
          showsUserLocation={true}
          showsMyLocationButton={true}
        />

        <View style={styles.buttonBottomRaised}>
          <RaisedButton
            onPress={() => navigation.navigate("Map")}
            text="Добавить"
          />
        </View>
        <View
          style={{
            position: "absolute",
            top: "80%",
            left: "80%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CustomFAB icon="crosshairs-gps" style={styles.fabButtonBig} />
        </View>
      </View>
    );
  }

  return <View style={styles.container}>{mapScreen}</View>;
}
