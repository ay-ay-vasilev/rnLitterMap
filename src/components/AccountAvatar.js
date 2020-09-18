import React from "react";
import { View } from "react-native";
import { Avatar, useTheme } from "react-native-paper";

import CustomFAB from "../components/CustomFAB";
import styles from "../styles/styles";

export default function AccountAvatar(props) {
  const { colors } = useTheme();

  return (
    <View style={{ alignItems: "center", marginTop: 30, marginBottom: 30 }}>
      <Avatar.Image
        size={172}
        source={require("../assets/no-img-new.png")}
        style={{ backgroundColor: colors.LIGHT_GREY }}
      />

      <View style={{ position: "absolute", top: "70%", left: "60%" }}>
        <CustomFAB icon="pencil" style={styles.fabButtonSmall} />
      </View>
    </View>
  );
}
