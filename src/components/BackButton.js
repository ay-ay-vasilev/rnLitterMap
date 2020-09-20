import React from "react";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function BackButton() {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        position: "absolute",
        width: 48,
        height: 48,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <MaterialCommunityIcons name="arrow-left" color="white" size={24} />
    </TouchableOpacity>
  );
}
