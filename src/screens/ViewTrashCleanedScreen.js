import React from "react";
import { View, Text } from "react-native";
import { useTheme } from "react-native-paper";

import styles from "../styles/styles";
// Custom components
import InfoList from "../components/InfoList";
import UserCard from "../components/UserCard";
import { GradientHighlightGreen } from "../components/Gradients";
import { PhotoMenuNotCleaned } from "../components/PhotoMenu";

import { fakeUser } from "../test/testData";

export default function ViewTrashNotCleanedScreen({ route, navigation }) {
  const { data } = route.params;
  const { colors } = useTheme();

  return (
    <View style={{ flex: 1 }}>
      <PhotoMenuNotCleaned
        photo={data.img}
        text="УБРАНО"
        onPress={() => navigation.goBack()}
      />

      <View style={{ flex: 1, width: "100%", alignItems: "center" }}>
        <GradientHighlightGreen />
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 10,
            marginTop: 10,
          }}
        >
          <Text style={{ fontSize: 26, color: colors.PRIMARY_SOLID }}>
            УБРАНО
          </Text>
        </View>

        <View style={{ width: "100%", flex: 1 }}>
          <InfoList data={data} />
          <UserCard user={fakeUser} />
        </View>
      </View>
    </View>
  );
}
