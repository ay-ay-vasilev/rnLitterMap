import React from "react";
import { View, Text } from "react-native";
import CategoryText from "./CategoryText";

import { useTheme } from "react-native-paper";

export default function InfoList() {
  const { colors } = useTheme();

  return (
    <View style={{ flex: 1, width: "100%" }}>
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

      <View
        style={{
          flex: 1,
          width: "100%",
          borderBottomColor: colors.LIGHT_GREY,
          borderBottomWidth: 1,
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            marginLeft: 20,
            marginRight: 20,
            marginTop: 5,
            marginBottom: 5,
          }}
        >
          <CategoryText
            categoryName="Размер"
            categoryValue="Хватит одного пакета"
          />
          <CategoryText
            categoryName="Добавлено"
            categoryValue="12 сент. 2020 г."
          />
        </View>
      </View>
    </View>
  );
}
