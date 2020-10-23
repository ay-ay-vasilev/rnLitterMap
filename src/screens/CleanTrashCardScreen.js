import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Switch, useTheme } from "react-native-paper";

import styles from "../styles/styles";
// Custom components
import { PhotoMenuUpload } from "../components/PhotoMenu";
import RaisedButton from "../components/RaisedButton";

import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";

export default function CleanTrashCardScreen({ route, navigation }) {
  const [location, setLocation] = useState(null);
  const [image, setImage] = useState(null);
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const { colors } = useTheme();

  useEffect(() => {
    let mounted = true;
    setLocation(route.params.location);
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
      litterPhotos: { uri: image },
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
        text="ФОТО ПОСЛЕ УБОРКИ"
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
        <View style={styles.commonWrapper}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <View
              style={{
                position: "absolute",
                width: "100%",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                Убрано мной
              </Text>
            </View>
            <Switch
              color={colors.PRIMARY_SOLID}
              value={isSwitchOn}
              onValueChange={() => setIsSwitchOn(!isSwitchOn)}
              style={{ marginLeft: 20 }}
            />
          </View>
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
    </View>
  );
}
