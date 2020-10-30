import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Switch, useTheme } from "react-native-paper";
// Expo
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
// API
import { uploadLitterItem } from "../firebase/LitterCollectionAPI";
// Styling
import styles from "../styles/styles";
// Custom components
import { PhotoMenuUpload } from "../components/PhotoMenu";
import RaisedButton from "../components/RaisedButton";
import { LoadingTransparent } from "../components/Loading";

export default function CleanTrashCardScreen({ route, navigation }) {
  const [image, setImage] = useState(null);
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [loading, setLoading] = useState(false);
  const { colors } = useTheme();

  console.log(route.params.id);

  useEffect(() => {
    let mounted = true;
    return () => (mounted = false);
  });

  const uploadFinish = () => {
    setLoading(false);
    navigation.popToTop();
  };

  const uploadButton = () => {
    let litterItem = {
      id: route.params.id,
      cleaned: true,
      cleanedPhotos: { uri: image },
    };

    setLoading(true);
    console.log("HEY");
    uploadLitterItem(litterItem, uploadFinish, { updating: true });
  };

  const noPhotoMessage = () => {
    Alert.alert(
      "Ошибка",
      "Для подтверждения уборки мусора фотография обязательна!"
    );
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
            onPress={() => (image ? uploadButton() : noPhotoMessage())}
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
