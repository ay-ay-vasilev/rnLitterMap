import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useTheme } from "react-native-paper";

import RaisedButton from "../components/RaisedButton";
import CustomFAB from "../components/CustomFAB";
import Loading from "../components/Loading";

import * as Location from "expo-location";

import styles from "../styles/styles";
import { fakeData } from "../test/testData";

import { translateSize } from "../utils/utils";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function MapScreen({ navigation }) {
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.09,
    longitudeDelta: 0.02,
    loaded: false,
  });

  const { colors } = useTheme();

  useEffect(() => {
    let mounted = true;
    (async () => {
      if (mounted) {
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location, { loaded: true });
      }
    })();
    return () => (mounted = false);
  });

  function goToInitialLocation() {
    this.map.animateToRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05,
    });
  }

  let mapScreen = <Loading />;
  if (location.loaded) {
    mapScreen = (
      <View style={styles.containerWhite}>
        <MapView
          ref={(map) => {
            this.map = map;
          }}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.5,
            longitudeDelta: 0.5,
          }}
          style={styles.map}
          showsUserLocation={true}
          showsMyLocationButton={true}
          showsPointsOfInterest={false}
          showsBuildings={false}
          showsTraffic={false}
          showsIndoors={false}
        >
          {fakeData.map((marker, index) => (
            <Marker
              key={index}
              coordinate={marker.location}
              title={marker.cleaned ? "Убрано" : "Не убрано"}
              description={translateSize(marker.size)}
            >
              <View
                style={{
                  backgroundColor: "white",
                  elevation: 2,
                  borderRadius: 25,
                  width: 34,
                  height: 34,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="delete-circle"
                  size={32}
                  color={
                    marker.cleaned
                      ? colors.PRIMARY_SOLID
                      : colors.SECONDARY_SOLID
                  }
                />
              </View>
            </Marker>
          ))}
        </MapView>

        <View style={styles.buttonBottomRaisedWrapper}>
          <RaisedButton
            onPress={() =>
              navigation.navigate("AddTrashCard", { location: location })
            }
            text="Добавить"
            buttonStyle={styles.raisedButton}
            textStyle={styles.whiteTextSmall}
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

  return <View style={styles.containerWhite}>{mapScreen}</View>;
}
