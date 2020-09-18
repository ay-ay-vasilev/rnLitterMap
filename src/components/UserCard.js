import React from "react";
import { View, Text } from "react-native";
import { Avatar, useTheme } from "react-native-paper";

export default function UserCard(props) {
  const { colors } = useTheme();

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          borderBottomColor: colors.LIGHT_GREY,
          borderBottomWidth: 1,
          padding: 11,
          alignItems: "center",
        }}
      >
        <Avatar.Image
          source={require("../assets/no-img-new.png")}
          style={{ backgroundColor: colors.LIGHT_GREY }}
        />
        <Text
          style={{
            padding: 13,
            color: colors.TEXT_DARK,
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          {props.user.name}
        </Text>
      </View>
    </View>
  );
}
