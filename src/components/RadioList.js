import React, { useState } from "react";
import { View, Text } from "react-native";
import { RadioButton, useTheme } from "react-native-paper";
import styles from "../styles/styles";

export default function RadioList(props) {
  const { colors } = useTheme();

  const radioList = props.options.map((item, index) => (
    <View
      key={index}
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 20,
      }}
    >
      <RadioButton
        value={index}
        status={props.checked === index ? "checked" : "unchecked"}
        onPress={() => props.setChecked(index)}
        color={colors.PRIMARY_SOLID}
      />
      <Text style={{ textAlignVertical: "center" }}>{item}</Text>
    </View>
  ));

  return <View style={styles.commonWrapper}>{radioList}</View>;
}
