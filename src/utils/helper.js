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
          <MaterialCommunityIcons
            name={iconName}
            color={colors.primary}
            size={26}
          />
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
      color={colors.secondary}
      size={26}
    />
  );
}
