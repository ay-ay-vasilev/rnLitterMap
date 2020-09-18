import React from "react";
import { View, ScrollView } from "react-native";
import { useTheme } from "react-native-paper";

import RaisedButton from "../components/RaisedButton";
import AccountAvatar from "../components/AccountAvatar";
import AccountPropertyCard from "../components/AccountPropertyCard";

import styles from "../styles/styles";

import { fakeUser } from "../test/testData";

export default function AccountScreen({ navigation }) {
  const { colors } = useTheme();

  return (
    <View>
      <ScrollView>
        <AccountAvatar />

        <AccountPropertyCard
          propertyName="Имя"
          propertyValue={fakeUser.name}
          colors={colors}
        />

        <AccountPropertyCard
          propertyName={fakeUser.dateOfBirth}
          propertyValue="01.01.2000"
          colors={colors}
        />

        <AccountPropertyCard
          propertyName={fakeUser.status}
          propertyValue="Спасаю Землю"
          colors={colors}
        />

        <AccountPropertyCard
          propertyName={fakeUser.username}
          propertyValue="@username"
          colors={colors}
        />

        <View style={{ alignItems: "center", marginTop: 20, marginBottom: 20 }}>
          <RaisedButton
            onPress={() => navigation.navigate("Account")}
            text="Сохранить"
            buttonStyle={styles.raisedButton}
            textStyle={styles.whiteTextMedium}
          />
        </View>
      </ScrollView>
    </View>
  );
}
