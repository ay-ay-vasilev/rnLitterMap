import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import styles from "../styles/styles";

export function Loading() {
  return (
    <View style={styles.containerWhite}>
      <ActivityIndicator size={64} color="grey" />
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
      <ActivityIndicator size={64} color="white" />
    </View>
  );
}
