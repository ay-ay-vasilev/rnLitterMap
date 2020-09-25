import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MainNavigation from "./MainNavigation";

import LoginScreen from "../screens/LoginScreen";

import PermissionsScreen from "../screens/PermissionsScreen";

const Stack = createStackNavigator();

export default LoginNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="LoginScreen"
      >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Permissions" component={PermissionsScreen} />
        <Stack.Screen name="MainNavigation" component={MainNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
