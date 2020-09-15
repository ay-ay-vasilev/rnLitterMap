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

function showImage2() {
  return (
    <Image
      source={require("../assets/trash_2.jpg")}
      style={{ width: 85, height: 85 }}
    />
  );
}

export default function CardlistScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <List.Item
        titleNumberOfLines={3}
        title={
          <Text>
            <Text style={styles.cardListTitle1Cleaned}>Убрано{`\n`}</Text>
            <Text style={styles.cardListTitle2}>в 5 км{`\n`}</Text>
            <Text style={styles.cardListTitle3}>Хватит одного пакета</Text>
          </Text>
        }
        description="5 дней назад"
        left={showImage1}
      />
      <List.Item
        titleNumberOfLines={3}
        title={
          <Text>
            <Text style={styles.cardListTitle1NotCleaned}>Не убрано{`\n`}</Text>
            <Text style={styles.cardListTitle2}>в 100 м{`\n`}</Text>
            <Text style={styles.cardListTitle3}>Нужно несколько пакетов</Text>
          </Text>
        }
        description="Неделю назад"
        left={showImage2}
      />
      <View style={styles.buttonBottomRaised}>
        <RaisedButton navigation={navigation} path="Cardlist" text="Добавить" />
      </View>
    </View>
  );
}
