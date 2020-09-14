import React from "react";
import { Image, View, TouchableOpacity, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "react-native-paper";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Main from "./Main";
import styles from "../styles/styles";

import RaisedButton from "../components/RaisedButton";

const Stack = createStackNavigator();

function LoginStackScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logo-vertical.png")}
        style={styles.loginLogo}
      />
      <RaisedButton navigation={navigation} path="Main" text="Войти" />
    </View>
  );
}

export default function LoginScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="LoginStackScreen"
      >
        <Stack.Screen name="LoginStackScreen" component={LoginStackScreen} />
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
