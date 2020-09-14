import React from "react";
import { Dimensions, View } from "react-native";
import MapView from "react-native-maps";

import RaisedButton from "../components/RaisedButton";

export default function MapScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <MapView
        style={{
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
        }}
      />
      <View
        style={{
          position: "absolute",
          top: "90%",
          left: 0,
          right: 0,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "flex-end",
        }}
      >
        <RaisedButton navigation={navigation} path="Map" text="Добавить" />
      </View>
    </View>
  );
}
