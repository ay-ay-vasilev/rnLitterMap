import React from "react";
import { Image, Text } from "react-native";
import { List, useTheme } from "react-native-paper";
import styles from "../styles/styles";
import {
  translateSize,
  formatDistance,
  formatDateRelative,
} from "../utils/utils";

export default function ListItem(props) {
  const { colors } = useTheme();

  return (
    <List.Item
      style={{ borderBottomColor: colors.LIGHT_GREY, borderBottomWidth: 1 }}
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
      description={formatDateRelative(props.element.date)}
      onPress={props.onPress}
      left={() => (
        <Image source={props.element.img} style={{ width: 85, height: 85 }} />
      )}
    />
  );
}
