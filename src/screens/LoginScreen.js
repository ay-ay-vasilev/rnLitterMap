import React from "react";
import { Image, View } from "react-native";

import styles from "../styles/styles";

import RaisedButton from "../components/RaisedButton";

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.loginLogoWrapper}>
        <Image
          source={require("../assets/logo-vertical.png")}
          style={styles.loginLogo}
        />
      </View>
      <RaisedButton
        onPress={() => navigation.navigate("MainNavigation")}
        text="Войти"
        buttonStyle={styles.raisedButton}
        textStyle={styles.whiteTextMedium}
      />
    </View>
  );
}
