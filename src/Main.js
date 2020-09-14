import React from "react";
import { View } from "react-native";
// Navigation stuff
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
// Icon and fluff stuff
import { useTheme, IconButton } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-community/masked-view";
// Screens
import MapScreen from "./screens/MapScreen";
import CardlistScreen from "./screens/CardlistScreen";
import AccountScreen from "./screens/AccountScreen";

import { GradientSelected } from "./utils/helper";

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
        options={{ title: "Карта" }}
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
        options={{ title: "Профиль" }}
      />
    </AccountStack.Navigator>
  );
}

export default function Main(props) {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Dumplist"
      activeColor={colors.primary}
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
