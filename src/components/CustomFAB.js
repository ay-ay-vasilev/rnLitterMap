import React from "react";
import { TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "react-native-paper";

export default function CustomFAB(props) {
  const { colors } = useTheme();

  return (
    <LinearGradient
      colors={[colors.PRIMARY_GRADIENT_1, colors.PRIMARY_GRADIENT_2]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 1 }}
      style={props.style}
    >
      <TouchableOpacity style={props.style} onPress={props.onPress}>
        <MaterialCommunityIcons name={props.icon} color="white" size={24} />
      </TouchableOpacity>
    </LinearGradient>
  );
}
