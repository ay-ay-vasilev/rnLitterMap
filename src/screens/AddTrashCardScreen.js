import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

import styles from "../styles/styles";
// Custom components
import { PhotoMenuUpload } from "../components/PhotoMenu";
import RaisedButton from "../components/RaisedButton";
import RadioList from "../components/RadioList";
import Loading from "../components/Loading";

import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

import { uploadLitterItem } from "../firebase/LitterCollectionAPI";
// REMOVE LATER
import moment from "moment";

export default function AddTrashCardScreen({ route, navigation }) {
  const [location, setLocation] = useState(null);
  const [image, setImage] = useState(null);
  const [checked, setChecked] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;
    setLocation(route.params.location);
    return () => (mounted = false);
  });

  const uploadFinish = () => {
    setLoading(false);
    navigation.popToTop();
  };

  const uploadButton = () => {
    const today = new Date();
    const date = moment(today).format("YYYY-MM-DD");

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

    let litterItem = {
      cleaned: false,
      location: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      },
      size: size,
      date: date,
      img: { uri: image },
    };

    setLoading(true);
    uploadLitterItem(litterItem, uploadFinish);
  };

  const pickImg = async () => {
    if (Platform.OS !== "web") {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert(
          "Для выбора файла, приложению требуется разрешение на использование камеры."
        );
      } else {
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
    }
  };

  let loadingView = loading ? (
    <View
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Loading />
    </View>
  ) : (
    <View />
  );

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
            text="Готово"
            buttonStyle={styles.raisedButtonBig}
            textStyle={styles.whiteTextMedium}
          />
        </View>
      </View>
      {loadingView}
    </View>
  );
}
