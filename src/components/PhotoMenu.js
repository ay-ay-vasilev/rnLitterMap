import React from "react";
import { View, Image, Text } from "react-native";
import styles from "../styles/styles";
import { GradientBlack } from "../components/Gradients";

import BackButton from "../components/BackButton";
import CustomFAB from "../components/CustomFAB";

export function PhotoMenuNotCleaned(props) {
  return (
    <View style={styles.containerBlack}>
      <View style={styles.containerTransparent}>
        <Image source={props.photo} style={styles.containerBlack} />
        <GradientBlack />
      </View>
      <View
        style={{
          position: "absolute",
          top: 24,
          width: "100%",
          height: 50,
          justifyContent: "center",
        }}
      >
        <Text style={styles.whiteTextBig}>{props.text}</Text>
        <BackButton onPress={props.onPress} />
      </View>
    </View>
  );
}

export function PhotoMenuUpload(props) {
  return (
    <View style={styles.containerBlack}>
      <View style={styles.containerTransparent}>
        <Image
          source={
            props.image
              ? { uri: props.image }
              : require("../assets/no-img-uploaded.png")
          }
          style={styles.containerBlack}
        />
        <GradientBlack />
      </View>
      <View style={styles.fabButtonLocationWrapper}>
        <CustomFAB
          icon="plus"
          style={styles.fabButtonBig}
          onPress={props.pickImg}
        />
      </View>
      <View
        style={{
          position: "absolute",
          top: 24,
          width: "100%",
          height: 50,
          justifyContent: "center",
        }}
      >
        <Text style={styles.whiteTextBig}>{props.text}</Text>
        <BackButton onPress={props.onPress} />
      </View>
    </View>
  );
}
