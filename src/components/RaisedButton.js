import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "react-native-paper";

export default function RaisedButton(props) {
  const { colors } = useTheme();

  return (
    <LinearGradient
      colors={[colors.PRIMARY_GRADIENT_1, colors.PRIMARY_GRADIENT_2]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 1 }}
      style={props.buttonStyle}
    >
      <TouchableOpacity onPress={props.onPress} style={props.buttonStyle}>
        <Text style={props.textStyle}>{props.text}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}
