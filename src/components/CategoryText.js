import React from "react";
import { View, Text } from "react-native";
import { useTheme } from "react-native-paper";

export default function CategoryText(props) {
  const { colors } = useTheme();

  return (
    <View style={{ flexDirection: "row" }}>
      <View
        style={{
          flex: 2,
          justifyContent: "center",
          margin: "1%",
        }}
      >
        <Text style={{ color: colors.TEXT_GREY, fontWeight: "bold" }}>
          {props.categoryName}
        </Text>
      </View>
      <View
        style={{
          flex: 3,
          justifyContent: "center",
          margin: "1%",
        }}
      >
        <Text style={{ color: colors.TEXT_DARK, fontWeight: "bold" }}>
          {props.categoryValue}
        </Text>
      </View>
    </View>
  );
}
