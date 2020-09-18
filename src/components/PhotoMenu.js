import React from "react";
import { View, Image, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export function PhotoMenuNotCleaned(props) {
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        alignItems: "center",
      }}
    >
      <Image source={props.photo} style={{ flex: 1, resizeMode: "contain" }} />
      <LinearGradient
        colors={[
          "rgba(0,0,0, 0.9)",
          "rgba(0,0,0, 0.8)",
          "rgba(0,0,0, 0.6)",
          "rgba(0,0,0, 0.0)",
          "rgba(0,0,0,0.0)",
          "rgba(0,0,0, 0.0)",
        ]}
        style={{
          position: "absolute",
          width: "100%",
          height: "50%",
        }}
      />
    </View>
  );
}
