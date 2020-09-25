import React from "react";
// Navigation stuff
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
// Icon and fluff stuff
import { useTheme } from "react-native-paper";
// Screens
import MapScreen from "../screens/MapScreen";
import CardlistScreen from "../screens/CardlistScreen";
import AccountScreen from "../screens/AccountScreen";
import ViewTrashNotCleanedScreen from "../screens/ViewTrashNotCleanedScreen";
import ViewTrashCleanedScreen from "../screens/ViewTrashCleanedScreen";
import AddTrashCardScreen from "../screens/AddTrashCardScreen";
import CleanTrashCardScreen from "../screens/CleanTrashCardScreen";

import { GradientSelected } from "../utils/utils";

const Tab = createMaterialBottomTabNavigator();

const CardlistStack = createStackNavigator();
function CardlistStackScreen() {
  return (
    <CardlistStack.Navigator>
      <CardlistStack.Screen
        name="Cardlist"
        component={CardlistScreen}
        options={{
          title: "Свалки",
          headerLeft: null,
          headerTitleStyle: { alignSelf: "center" },
        }}
      />
      <CardlistStack.Screen
        name="ViewTrashNotCleaned"
        component={ViewTrashNotCleanedScreen}
        options={{
          headerShown: false,
        }}
      />
      <CardlistStack.Screen
        name="ViewTrashCleaned"
        component={ViewTrashCleanedScreen}
        options={{
          headerShown: false,
        }}
      />
      <CardlistStack.Screen
        name="AddTrashCard"
        component={AddTrashCardScreen}
        options={{
          headerShown: false,
        }}
      />
      <CardlistStack.Screen
        name="CleanTrashCard"
        component={CleanTrashCardScreen}
        options={{
          headerShown: false,
        }}
      />
    </CardlistStack.Navigator>
  );
}

const MapStack = createStackNavigator();
function MapStackScreen() {
  return (
    <MapStack.Navigator>
      <MapStack.Screen
        name="Map"
        component={MapScreen}
        options={{
          title: "Карта",
          headerLeft: null,
          headerTitleStyle: { alignSelf: "center" },
        }}
      />
    </MapStack.Navigator>
  );
}

const AccountStack = createStackNavigator();
function AccountStackScreen() {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen
        name="Account"
        component={AccountScreen}
        options={{
          title: "Профиль",
          headerLeft: null,
          headerTitleStyle: { alignSelf: "center" },
        }}
      />
    </AccountStack.Navigator>
  );
}

export default function MainNavigation() {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Dumplist"
      activeColor={colors.PRIMARY_SOLID}
      labelStyle={{ fontSize: 12 }}
      barStyle={{ backgroundColor: "white" }}
    >
      <Tab.Screen
        name="Dumplist"
        component={CardlistStackScreen}
        options={{
          tabBarLabel: "Свалки",
          tabBarIcon: ({ focused }) =>
            GradientSelected(focused, "clipboard-text", colors),
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapStackScreen}
        options={{
          tabBarLabel: "Карта",
          tabBarIcon: ({ focused }) => GradientSelected(focused, "web", colors),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountStackScreen}
        options={{
          tabBarLabel: "Профиль",
          tabBarIcon: ({ focused }) =>
            GradientSelected(focused, "account-circle", colors),
        }}
      />
    </Tab.Navigator>
  );
}
