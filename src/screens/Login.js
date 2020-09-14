import React from "react";
import { Image, View, TouchableOpacity, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Main from "../Main";
import styles from "../styles";

const Stack = createStackNavigator();

function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logo-vertical.png")}
        style={styles.loginLogo}
      />
      <LinearGradient
        colors={["#00FF75", "#08BD9D"]}
        style={styles.buttonLogin}
      >
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => navigation.navigate("Main")}
        >
          <Text style={styles.whiteText}>Войти</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

export default function Login() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="LoginScreen"
      >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
