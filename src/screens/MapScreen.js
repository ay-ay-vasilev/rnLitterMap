import React from "react";
import { View } from "react-native";
import MapView from "react-native-maps";

import RaisedButton from "../components/RaisedButton";

import styles from "../styles/styles";

export default function MapScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
      <View style={styles.buttonBottomRaised}>
        <RaisedButton navigation={navigation} path="Map" text="Добавить" />
      </View>
    </View>
  );
}
