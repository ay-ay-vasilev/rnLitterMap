import React from "react";
import { Image, Text } from "react-native";
import { List } from "react-native-paper";
import styles from "../styles/styles";
import { translateSize } from "../utils/utils";

export default function ListItem(props) {
  return (
    <List.Item
      titleNumberOfLines={3}
      title={
        <Text>
          <Text
            style={
              props.element.cleaned
                ? styles.cardListTitle1Cleaned
                : styles.cardListTitle1NotCleaned
            }
          >
            {props.element.cleaned ? "Убрано" : "Не убрано"}
            {`\n`}
          </Text>
          <Text style={styles.cardListTitle2}>
            {props.element.distance}
            {`\n`}
          </Text>
          <Text style={styles.cardListTitle3}>
            {translateSize(props.element.size)}
          </Text>
        </Text>
      }
      description={props.element.date}
      onPress={props.onPress}
      left={() => (
        <Image source={props.element.img} style={{ width: 85, height: 85 }} />
      )}
    />
  );
}
