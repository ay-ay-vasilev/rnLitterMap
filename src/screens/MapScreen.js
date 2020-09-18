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
    this.map.animateToRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05,
    });
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
          ref={(map) => {
            this.map = map;
          }}
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

        <View style={styles.buttonBottomRaisedWrapper}>
          <RaisedButton
            onPress={() => navigation.navigate("Map")}
            text="Добавить"
            buttonStyle={styles.raisedButton}
            textStyle={styles.whiteTextMedium}
          />
        </View>
        <View style={styles.fabButtonLocationWrapper}>
          <CustomFAB
            icon="crosshairs-gps"
            style={styles.fabButtonBig}
            onPress={() => goToInitialLocation()}
          />
        </View>
      </View>
    );
  }

  return <View style={styles.container}>{mapScreen}</View>;
}
