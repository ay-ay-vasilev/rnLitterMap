import React from "react";
import { View } from "react-native";
import AnimatedLoader from "react-native-animated-loader";
import styles from "../styles/styles";
import { useTheme } from "react-native-paper";

export default function Loading() {
  const { colors } = useTheme();

  return (
    <View styles={styles.container}>
      <AnimatedLoader
        visible={true}
        overlayColor="rgba(255,255,255,0)"
        animationStyle={styles.lottie}
        source={require("../assets/31350-grey-pulse.json")}
        speed={1}
      />
    </View>
  );
}
