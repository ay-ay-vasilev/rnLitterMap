import React from "react";
import { View } from "react-native";
import { Avatar, FAB } from "react-native-paper";

export default function AccountAvatar(props) {
  return (
    <View style={{ alignItems: "center", marginTop: 30, marginBottom: 30 }}>
      <Avatar.Image
        size={172}
        source={require("../assets/no-img-new.png")}
        style={{ backgroundColor: props.colors.LIGHT_GREY }}
      />

      <View style={{ position: "absolute", top: "70%", left: "60%" }}>
        <FAB
          small
          color="white"
          icon="pencil"
          style={{ backgroundColor: props.colors.PRIMARY_SOLID }}
        />
      </View>
    </View>
  );
}
