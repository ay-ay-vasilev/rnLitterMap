import React, { useState, useEffect } from "react";
import { View, Image, Text } from "react-native";
import styles from "../styles/styles";
import { GradientBlack } from "../components/Gradients";

import BackButton from "../components/BackButton";
import CustomFAB from "../components/CustomFAB";

import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

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
  const [image, setImage] = useState(null);

  useEffect(() => {
    getPermission();
  });

  async function pickImg() {
    // Pick an image

    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        setImage(result.uri);
      }
    } catch (E) {
      console.log(E);
    }
  }

  async function getPermission() {
    if (Platform.OS !== "web") {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert(
          "Для выбора файла, приложению требуется разрешение на использование камеры."
        );
      }
    }
  }

  return (
    <View style={styles.containerBlack}>
      <View style={styles.containerTransparent}>
        <Image
          source={
            image ? { uri: image } : require("../assets/no-img-uploaded.png")
          }
          style={styles.containerBlack}
        />
        <GradientBlack />
      </View>
      <View style={styles.fabButtonLocationWrapper}>
        <CustomFAB
          icon="plus"
          style={styles.fabButtonBig}
          onPress={() => pickImg()}
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
