import React from "react";
import { View, Text } from "react-native";
import RaisedButton from "../components/RaisedButton";

export default function AccountScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
      }}
    >
      <Text>Account Screen</Text>
      <RaisedButton navigation={navigation} path="Account" text="Сохранить" />
    </View>
  );
}
