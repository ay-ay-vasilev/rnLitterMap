import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/styles";
import { useTheme } from "react-native-paper";

export default function Loading() {
  const { colors } = useTheme();

  return (
    <View style={styles.containerWhite}>
      <Text style={{ fontSize: 18 }}>Загрузка...</Text>
    </View>
  );
}
