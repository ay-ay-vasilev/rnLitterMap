import React from "react";
import { Image, View, Text } from "react-native";
import RaisedButton from "../components/RaisedButton";
import styles from "../styles/styles";
import * as Location from "expo-location";

export default PermissionsScreen = ({ navigation }) => {
  askPermission = async () => {
    let { status } = await Location.requestPermissionsAsync();
    if (status == "granted") {
      navigation.navigate("MainNavigation");
    }
  };

  return (
    <View style={styles.containerWhite}>
      <View style={styles.loginLogoWrapper}>
        <Image
          source={require("../assets/logo-vertical.png")}
          style={styles.loginLogoSmall}
        />
      </View>
      <View style={{ margin: 20 }}>
        <Text style={{ fontSize: 20, textAlign: "center" }}>
          Для работы приложения разрешите доступ к геолокации в настройках
          телефона.
        </Text>
      </View>

      <RaisedButton
        onPress={() => askPermission()}
        text="Разрешить"
        buttonStyle={styles.raisedButton}
        textStyle={styles.whiteTextSmall}
      />
    </View>
  );
};
