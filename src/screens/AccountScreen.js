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
          propertyName="Дата рождения"
          propertyValue={fakeUser.dateOfBirth}
          colors={colors}
        />

        <AccountPropertyCard
          propertyName="Статус"
          propertyValue={fakeUser.status}
          colors={colors}
        />

        <AccountPropertyCard
          propertyName="Имя пользователя"
          propertyValue={fakeUser.username}
          colors={colors}
        />

        <View style={styles.centeredCommonWrapper}>
          <RaisedButton
            onPress={() => navigation.navigate("Account")}
            text="Сохранить"
            buttonStyle={styles.raisedButton}
            textStyle={styles.whiteTextSmall}
          />
        </View>
      </ScrollView>
    </View>
  );
}
