import React, { useState, useEffect } from "react";
import { View } from "react-native";
// Expo
import * as Location from "expo-location";
// Map
import MapView, { Marker } from "react-native-maps";
// Navigation
import { useIsFocused } from "@react-navigation/native";
// API
import { getLitterItems } from "../firebase/LitterCollectionAPI";
// React Paper
import { useTheme } from "react-native-paper";
// Styling
import styles from "../styles/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// Custom stuff
import RaisedButton from "../components/RaisedButton";
import CustomFAB from "../components/CustomFAB";
import { Loading } from "../components/Loading";
// util
import { translateSize } from "../utils/utils";

export default function MapScreen({ navigation }) {
  const [location, setLocation] = useState({
    coords: { latitude: 0, longitude: 0 },
    latitudeDelta: 0.09,
    longitudeDelta: 0.02,
    loaded: false,
  });
  const [data, setData] = useState(null);
  const isFocused = useIsFocused();
  const { colors } = useTheme();

  const updateState = async () => {
    getLitterItems(onLitterReceived);
    let loc = await Location.getLastKnownPositionAsync({});
    setLocation({
      coords: loc.coords,
      latitudeDelta: 0.09,
      longitudeDelta: 0.02,
      loaded: true,
    });
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

  function goToInitialLocation() {
    this.map.animateToRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.5,
      longitudeDelta: 0.5,
    });
  }

  let mapScreen = <Loading />;
  if (location.loaded && data) {
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
          {data.map((marker, index) => (
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
