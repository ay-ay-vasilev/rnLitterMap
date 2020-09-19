import React from "react";
import { Image, Text } from "react-native";
import { List } from "react-native-paper";
import styles from "../styles/styles";
import { translateSize } from "../utils/utils";
import moment from "moment";

function formatDistance(distance) {
  if (distance < 100) {
    return "< 100 метров";
  } else if (distance < 1000) {
    return `в ${Number(distance / 100).toFixed(0) * 100} метрах`;
  } else if (distance > 10000) {
    return "> 10 км";
  } else {
    return `в ${Number(distance / 1000).toFixed(0)} км`;
  }
}

export default function ListItem(props) {
  const formattedDate = moment(props.element.date).fromNow();

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
            {formatDistance(props.distance)}
            {`\n`}
          </Text>
          <Text style={styles.cardListTitle3}>
            {translateSize(props.element.size)}
          </Text>
        </Text>
      }
      description={formattedDate}
      onPress={props.onPress}
      left={() => (
        <Image source={props.element.img} style={{ width: 85, height: 85 }} />
      )}
    />
  );
}
