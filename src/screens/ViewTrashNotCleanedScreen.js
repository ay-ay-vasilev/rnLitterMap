import React from "react";
import { View } from "react-native";

import styles from "../styles/styles";
// Custom components
import RaisedButton from "../components/RaisedButton";
import InfoList from "../components/InfoList";
import UserCard from "../components/UserCard";
import { GradientHighlightRed } from "../components/GradientHighlight";
import { PhotoMenuNotCleaned } from "../components/PhotoMenu";

import { fakeData, fakeUser } from "../test/testData";

export default function ViewTrashNotCleanedScreen({ route, navigation }) {
  const { data } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <PhotoMenuNotCleaned
        photo={data.img}
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
          />
        </View>

        <View style={{ width: "100%", flex: 1 }}>
          <InfoList data={data} />
          <UserCard user={fakeUser} />
        </View>
      </View>
    </View>
  );
}
