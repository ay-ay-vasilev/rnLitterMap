import React from "react";
import { Image, View } from "react-native";

import styles from "../styles/styles";

import RaisedButton from "../components/RaisedButton";

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logo-vertical.png")}
        style={styles.loginLogo}
      />
      <RaisedButton
        navigation={navigation}
        path="MainNavigation"
        text="Войти"
      />
    </View>
  );
}
