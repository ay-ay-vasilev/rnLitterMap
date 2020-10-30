import React, { useState } from "react";
import { View, Text } from "react-native";
import { Switch, useTheme } from "react-native-paper";
// Expo
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
// styling
import styles from "../styles/styles";
// Custom components
import { PhotoMenuUpload } from "../components/PhotoMenu";
import RaisedButton from "../components/RaisedButton";

export default function CleanTrashCardScreen({ navigation }) {
  const [image, setImage] = useState(null);
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [loading, setLoading] = useState(false);
  const { colors } = useTheme();

  const uploadFinish = () => {
    setLoading(false);
    navigation.popToTop();
  };

  const uploadButton = () => {
    let litterItem = {
      cleaned: true,
      cleanedPhotos: { uri: image },
    };

    console.log(litterItem);
  };

  const cameraImg = async () => {
    if (Platform.OS !== "web") {
      let status;
      status = await Permissions.getAsync(Permissions.CAMERA);
      let statusCamera = status.status;

      status = await Permissions.getAsync(Permissions.CAMERA_ROLL);
      let statusCameraRoll = status.status;

      if (statusCamera !== "granted" || statusCameraRoll !== "granted") {
        alert(
          "Для выбора файла, приложению требуется разрешение на использование камеры."
        );
      } else {
        try {
          let result = await ImagePicker.launchCameraAsync({
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
      <LoadingTransparent />
    </View>
  ) : (
    <View />
  );

  return (
    <View style={{ flex: 1 }}>
      <PhotoMenuUpload
        image={image}
        text="ФОТО ПОСЛЕ УБОРКИ"
        onPress={() => navigation.goBack()}
        pickImg={() => pickImg()}
        cameraImg={() => cameraImg()}
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
      {loadingView}
    </View>
  );
}
