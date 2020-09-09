import React, { useState, useEffect } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import MapView from "react-native-maps";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

function MapScreen() {
  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle} />
    </View>
  );
}

function CardScreen() {
  return (
    <View style={styles.container}>
      <Text>Something here</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Cards"
          component={CardScreen}
          options={{ title: "Litter Cards" }}
        />
        <Tab.Screen
          name="Map"
          component={MapScreen}
          options={{ title: "Map" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
