import React from "react";
import "react-native-gesture-handler";
import { View } from "react-native";
// Navigation stuff
import { NavigationContainer } from "@react-navigation/native";
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

function GradientSelected(focused, iconName, colors) {
  return focused ? (
    <MaskedView
      style={{ flex: 1, flexDirection: "row" }}
      maskElement={
        <View
          style={{
            backgroundColor: "transparent",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MaterialCommunityIcons
            name={iconName}
            color={colors.primary}
            size={26}
          />
        </View>
      }
    >
      <LinearGradient
        colors={["#00FF75", "#15ABFF"]}
        style={{
          padding: 15,
          alignItems: "center",
          borderRadius: 5,
        }}
      />
    </MaskedView>
  ) : (
    <MaterialCommunityIcons
      name={iconName}
      color={colors.secondary}
      size={26}
    />
  );
}

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
          headerLeft: () => (
            <IconButton
              icon="menu"
              size={24}
              opPress={() => console.log("This is a button!")}
              title="Button"
            />
          ),
          headerRight: () => (
            <IconButton
              icon="dots-vertical"
              size={24}
              opPress={() => console.log("This is a button!")}
              title="Button"
            />
          ),
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

export default function Main() {
  const { colors } = useTheme();

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Map"
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
            tabBarIcon: ({ focused }) =>
              GradientSelected(focused, "web", colors),
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
    </NavigationContainer>
  );
}
