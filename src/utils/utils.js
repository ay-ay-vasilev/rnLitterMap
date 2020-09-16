import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-community/masked-view";

export function GradientSelected(focused, iconName, colors) {
  return focused ? (
    <MaskedView
      style={{ flex: 1, flexDirection: "row" }}
      maskElement={
        <View
          style={{
            backgroundColor: "transparent",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MaterialCommunityIcons name={iconName} size={26} />
        </View>
      }
    >
      <LinearGradient
        colors={["#00FF75", "#15ABFF"]}
        style={{
          padding: 15,
          alignItems: "center",
          borderRadius: 5,
        }}
      />
    </MaskedView>
  ) : (
    <MaterialCommunityIcons
      name={iconName}
      color={colors.TEXT_GREY}
      size={26}
    />
  );
}

export function translateSize(value) {
  switch (value) {
    case "small":
      return "Хватит одного пакета";
      break;
    case "medium":
      return "Нужно несколько пакетов";
      break;
    case "big":
      return "Нужен грузовой автомобиль";
      break;
    default:
      return "Неизвестно";
  }
}
