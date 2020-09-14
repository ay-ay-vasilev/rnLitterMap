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
      style={styles.buttonLogin}
    >
      <TouchableOpacity
        style={styles.buttonLogin}
        onPress={() => props.navigation.navigate(props.path)}
      >
        <Text style={styles.whiteText}>{props.text}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}
