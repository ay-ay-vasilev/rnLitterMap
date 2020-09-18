import React from "react";
import { View, Image, Text } from "react-native";
import { useTheme } from "react-native-paper";
import styles from "../styles/styles";
import { LinearGradient } from "expo-linear-gradient";
import RaisedButton from "../components/RaisedButton";

import { fakeData } from "../test/testData";

export default function ViewTrashNotCleanedScreen() {
  const { colors } = useTheme();

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Image
        source={require("../assets/trash_2.jpg")}
        style={{ height: "50%", resizeMode: "contain" }}
      />
      <LinearGradient
        colors={[
          "rgba(0,0,0, 0.9)",
          "rgba(0,0,0, 0.5)",
          "rgba(0,0,0, 0.0)",
          "rgba(0,0,0, 0.0)",
          "rgba(0,0,0,0.0)",
          "rgba(0,0,0, 0.0)",
        ]}
        style={{
          position: "absolute",
          width: "100%",
          height: "50%",
        }}
      />
      <LinearGradient
        colors={[
          "rgba(255,0,0, 0.9)",
          "rgba(255,0,0, 0.6)",
          "rgba(255,0,0, 0.2)",
          "rgba(255,0,0, 0.0)",
        ]}
        style={{
          width: "100%",
          height: 20,
        }}
      />
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 20,
        }}
      >
        <RaisedButton
          text="Убрать"
          buttonStyle={styles.raisedButtonBig}
          textStyle={styles.whiteTextMedium}
        />
      </View>
      <View
        style={{
          alignItems: "center",
          width: "100%",
          borderBottomColor: colors.LIGHT_GREY,
          borderBottomWidth: 1,
        }}
      >
        <Text style={{ fontWeight: "bold", lineHeight: 40 }}>Информация</Text>
      </View>
    </View>
  );
}
