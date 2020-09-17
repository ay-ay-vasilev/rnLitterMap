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
      <View style={styles.buttonBottomRaised}>
        <RaisedButton
          navigation={navigation}
          path="Cardlist"
          text="Добавить"
          style={styles.buttonLogin}
        />
      </View>
    </View>
  );
}
