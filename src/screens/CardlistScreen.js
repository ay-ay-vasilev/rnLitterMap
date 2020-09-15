import React from "react";
import { View, Image, Text, ScrollView } from "react-native";
import { List } from "react-native-paper";
import styles from "../styles/styles";
import RaisedButton from "../components/RaisedButton";

import { translateSize } from "../utils/utils";
import fakeData from "../test/testData";

export default function CardlistScreen({ navigation }) {
  const dumpCards = fakeData.map((element, index) => (
    <List.Item
      key={index}
      titleNumberOfLines={3}
      title={
        <Text>
          <Text
            style={
              element.cleaned
                ? styles.cardListTitle1Cleaned
                : styles.cardListTitle1NotCleaned
            }
          >
            {element.cleaned ? "Убрано" : "Не убрано"}
            {`\n`}
          </Text>
          <Text style={styles.cardListTitle2}>
            {element.distance}
            {`\n`}
          </Text>
          <Text style={styles.cardListTitle3}>
            {translateSize(element.size)}
          </Text>
        </Text>
      }
      description={element.date}
      left={() => (
        <Image source={element.img} style={{ width: 85, height: 85 }} />
      )}
    />
  ));

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>{dumpCards}</ScrollView>
      <View style={styles.buttonBottomRaised}>
        <RaisedButton navigation={navigation} path="Cardlist" text="Добавить" />
      </View>
    </View>
  );
}
