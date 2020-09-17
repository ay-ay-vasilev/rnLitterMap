import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "react-native-paper";
import styles from "../styles/styles";

export default function RaisedButton(props) {
  const { colors } = useTheme();

  return (
    <LinearGradient
      colors={[colors.PRIMARY_GRADIENT_1, colors.PRIMARY_GRADIENT_2]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 1 }}
      style={props.style}
    >
      <TouchableOpacity
        style={props.style}
        onPress={() => props.navigation.navigate(props.path)}
      >
        <Text style={styles.whiteText}>{props.text}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}
