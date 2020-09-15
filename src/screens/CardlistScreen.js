import React from "react";
import { View, Image, Text } from "react-native";
import { List } from "react-native-paper";
import styles from "../styles/styles";
import RaisedButton from "../components/RaisedButton";

function showImage1() {
  return (
    <Image
      source={require("../assets/organic_trash.jpg")}
      style={{ width: 85, height: 85 }}
    />
  );
}

export default function CardlistScreen({ navigation }) {
  const fakeData = [
    {
      cleaned: true,
      distance: "5 км",
      size: "small",
      date: "5 дней назад",
      img: "organic_trash.jpg",
    },
    {
      cleaned: true,
      distance: "5 км",
      size: "small",
      date: "5 дней назад",
      img: "organic_trash.jpg",
    },
    {
      cleaned: true,
      distance: "5 км",
      size: "small",
      date: "5 дней назад",
      img: "organic_trash.jpg",
    },
    {
      cleaned: true,
      distance: "5 км",
      size: "small",
      date: "5 дней назад",
      img: "organic_trash.jpg",
    },
    {
      cleaned: true,
      distance: "5 км",
      size: "small",
      date: "5 дней назад",
      img: "organic_trash.jpg",
    },
    {
      cleaned: true,
      distance: "5 км",
      size: "small",
      date: "5 дней назад",
      img: "organic_trash.jpg",
    },
    {
      cleaned: true,
      distance: "5 км",
      size: "small",
      date: "5 дней назад",
      img: "organic_trash.jpg",
    },
  ];

  const dumpCards = fakeData.map((element) => (
    <List.Item
      titleNumberOfLines={3}
      title={
        <Text>
          <Text style={styles.cardListTitle1Cleaned}>
            {element.cleaned ? "Убрано" : "Не убрано"}
            {`\n`}
          </Text>
          <Text style={styles.cardListTitle2}>
            {element.distance}
            {`\n`}
          </Text>
          <Text style={styles.cardListTitle3}>{element.size}</Text>
        </Text>
      }
      description="5 дней назад"
      left={showImage1}
    />
  ));

  return (
    <View style={{ flex: 1 }}>
      {dumpCards}
      <View style={styles.buttonBottomRaised}>
        <RaisedButton navigation={navigation} path="Cardlist" text="Добавить" />
      </View>
    </View>
  );
}
