import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/styles";

export function Loading() {
  return (
    <View style={styles.containerWhite}>
      <Text style={{ fontSize: 18 }}>Загрузка...</Text>
    </View>
  );
}

export function LoadingTransparent() {
  return (
    <View
      style={{
        ...styles.containerWhite,
        backgroundColor: "rgba(52, 52, 52, 0.8)",
      }}
    >
      <Text style={{ fontSize: 18, color: "white" }}>Загрузка...</Text>
    </View>
  );
}
