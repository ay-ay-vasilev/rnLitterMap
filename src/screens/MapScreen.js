import React from "react";
import { Dimensions, View } from "react-native";
import MapView from "react-native-maps";

export default function MapScreen() {
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
    </View>
  );
}
