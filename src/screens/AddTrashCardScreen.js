import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

import styles from "../styles/styles";
// Custom components
import { PhotoMenuUpload } from "../components/PhotoMenu";
import RaisedButton from "../components/RaisedButton";
import RadioList from "../components/RadioList";

import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";

export default function AddTrashCardScreen({ navigation }) {
  const [location, setLocation] = useState(null);
  const [image, setImage] = useState(null);
  const [checked, setChecked] = useState(0);

  useEffect(() => {
    let mounted = true;
    (async () => {
      getPermission();
      if (mounted) {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== "granted") {
          setErrorMsg("У приложения нет доступа к местоположению устройства.");
        }
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      }
    })();
    return () => (mounted = false);
  });

  function uploadButton() {
    const today = new Date();
    const date =
      today.getFullYear() +
      "-" +
      parseInt(today.getMonth() + 1) +
      "-" +
      today.getDate();

    let size;
    switch (checked) {
      case 0:
        size = "small";
        break;
      case 1:
        size = "medium";
        break;
      case 2:
        size = "big";
        break;
    }

    console.log({
      cleaned: false,
      location: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      },
      size: size,
      date: date,
      img: { uri: image },
    });
  }

  async function pickImg() {
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
    <View style={{ flex: 1 }}>
      <PhotoMenuUpload
        image={image}
        text="ФОТО МУСОРА"
        onPress={() => navigation.goBack()}
        pickImg={() => pickImg()}
      />

      <View
        style={{
          flex: 1,
          width: "100%",
          alignItems: "center",
        }}
      >
        <View style={styles.centeredCommonWrapper}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Размер мусора
          </Text>
        </View>

        <View style={styles.radioListWrapper}>
          <RadioList
            checked={checked}
            setChecked={setChecked}
            options={["Один пакет", "Несколько пакетов", "Грузовая машина"]}
          />
        </View>

        <View style={styles.centeredCommonWrapper}>
          <RaisedButton
            onPress={() => uploadButton()}
            text="Добавить"
            buttonStyle={styles.raisedButton}
            textStyle={styles.whiteTextSmall}
          />
        </View>
      </View>
    </View>
  );
}
