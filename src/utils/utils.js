import React from "react";
import { View } from "react-native";
// Styling
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-community/masked-view";

import moment from "moment";

export const GradientSelected = (focused, iconName, colors) => {
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
};

export const translateSize = (value) => {
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
};

export const formatDistance = (distance) => {
  if (distance < 100) {
    return "< 100 метров";
  } else if (distance < 1000) {
    return `в ${Number(distance / 100).toFixed(0) * 100} метрах`;
  } else if (distance > 10000) {
    return "> 10 км";
  } else {
    return `в ${Number(distance / 1000).toFixed(0)} км`;
  }
};

export const formatDateRelative = (date) => {
  return moment(new Date(date)).fromNow();
};

export const formatDate = (date) => {
  return moment(new Date(date)).format("ll");
};
