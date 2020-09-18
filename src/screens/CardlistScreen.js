import React from "react";
import { View, ScrollView } from "react-native";
import styles from "../styles/styles";
import RaisedButton from "../components/RaisedButton";
import ListItem from "../components/ListItem";

import { fakeData } from "../test/testData";

export default function CardlistScreen({ navigation }) {
  const dumpCards = fakeData.map((element, index) => (
    <ListItem key={index} element={element} />
  ));

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>{dumpCards}</ScrollView>
      <View style={styles.buttonBottomRaisedWrapper}>
        <RaisedButton
          onPress={() => navigation.navigate("Cardlist")}
          text="Добавить"
        />
      </View>
    </View>
  );
}
