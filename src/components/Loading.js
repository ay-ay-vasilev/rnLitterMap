import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/styles";
import { useTheme } from "react-native-paper";

export default function Loading() {
  const { colors } = useTheme();

  return (
    <View styles={styles.containerWhite}>
      <Text>Loading</Text>
    </View>
  );
}
