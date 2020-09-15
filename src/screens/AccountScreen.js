import React from "react";
import { View, Text } from "react-native";
import RaisedButton from "../components/RaisedButton";
import styles from "../styles/styles";

export default function AccountScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Account Screen</Text>
      <RaisedButton navigation={navigation} path="Account" text="Сохранить" />
    </View>
  );
}
