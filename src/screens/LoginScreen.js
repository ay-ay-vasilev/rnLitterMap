import React from "react";
import { Image, View } from "react-native";
import styles from "../styles/styles";
import RaisedButton from "../components/RaisedButton";
import * as Permissions from "expo-permissions";

export default LoginScreen = ({ navigation }) => {
  checkPermission = async () => {
    const { status } = await Permissions.getAsync(Permissions.LOCATION);
    if (status == "granted") {
      navigation.navigate("MainNavigation");
    } else {
      navigation.navigate("Permissions");
    }
  };

  return (
    <View style={styles.containerWhite}>
      <View style={styles.loginLogoWrapper}>
        <Image
          source={require("../assets/logo-vertical.png")}
          style={styles.loginLogo}
        />
      </View>
      <RaisedButton
        onPress={() => checkPermission()}
        text="Войти"
        buttonStyle={styles.raisedButton}
        textStyle={styles.whiteTextSmall}
      />
    </View>
  );
};
