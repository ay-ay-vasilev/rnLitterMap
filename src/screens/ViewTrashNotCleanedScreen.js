import React from "react";
import { View, Image, Text } from "react-native";
import { useTheme, Avatar } from "react-native-paper";
import styles from "../styles/styles";
import { LinearGradient } from "expo-linear-gradient";
// Custom components
import RaisedButton from "../components/RaisedButton";
import InfoList from "../components/InfoList";
import UserCard from "../components/UserCard";

import { fakeData, fakeUser } from "../test/testData";

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

      <View style={{ width: "100%", flex: 1 }}>
        <InfoList />
        <UserCard user={fakeUser} />
      </View>
    </View>
  );
}
