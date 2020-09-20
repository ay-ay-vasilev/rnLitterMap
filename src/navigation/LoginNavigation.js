import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MainNavigation from "./MainNavigation";

import LoginScreen from "../screens/LoginScreen";
import ViewTrashNotCleanedScreen from "../screens/ViewTrashNotCleanedScreen";
import ViewTrashCleanedScreen from "../screens/ViewTrashCleanedScreen";
import AddTrashCardScreen from "../screens/AddTrashCardScreen";
import CleanTrashCardScreen from "../screens/CleanTrashCardScreen";

const Stack = createStackNavigator();

export default function LoginNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="LoginScreen"
      >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="MainNavigation" component={MainNavigation} />
        <Stack.Screen
          name="ViewTrashNotCleaned"
          component={ViewTrashNotCleanedScreen}
        />
        <Stack.Screen
          name="ViewTrashCleaned"
          component={ViewTrashCleanedScreen}
        />
        <Stack.Screen name="AddTrashCard" component={AddTrashCardScreen} />
        <Stack.Screen name="CleanTrashCard" component={CleanTrashCardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
