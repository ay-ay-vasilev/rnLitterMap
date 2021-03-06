import React from "react";
import { View, Text } from "react-native";
import { useTheme } from "react-native-paper";

import styles from "../styles/styles";
// Custom components
import InfoList from "../components/InfoList";
import RaisedButton from "../components/RaisedButton";
import { GradientHighlightGreen } from "../components/Gradients";
import { GradientHighlightRed } from "../components/Gradients";
import { PhotoMenuNotCleaned } from "../components/PhotoMenu";

export function ViewTrashCleanedScreen({ route, navigation }) {
  const { data } = route.params;
  const { colors } = useTheme();

  console.log(data);

  return (
    <View style={{ flex: 1 }}>
      <PhotoMenuNotCleaned
        photo={data.cleanedPhotos}
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
          {/* <UserCard user={fakeUser} /> */}
        </View>
      </View>
    </View>
  );
}

export function ViewTrashNotCleanedScreen({ route, navigation }) {
  const { data } = route.params;

  console.log(data);

  return (
    <View style={{ flex: 1 }}>
      <PhotoMenuNotCleaned
        photo={data.litterPhotos}
        text="НЕ УБРАНО"
        onPress={() => navigation.goBack()}
      />

      <View style={{ flex: 1, width: "100%", alignItems: "center" }}>
        <GradientHighlightRed />
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
            onPress={() =>
              navigation.navigate("CleanTrashCard", {
                id: data.id,
              })
            }
          />
        </View>

        <View style={{ width: "100%" }}>
          <InfoList data={data} />
          {/* <UserCard user={fakeUser} /> */}
        </View>
      </View>
    </View>
  );
}
