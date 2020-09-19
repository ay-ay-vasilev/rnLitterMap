import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export function PhotoMenuNotCleaned(props) {
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <View
        style={{
          flex: 1,
          width: "100%",
          alignItems: "center",
        }}
      >
        <Image
          source={props.photo}
          style={{ flex: 1, width: "100%", backgroundColor: "black" }}
        />
        <LinearGradient
          colors={[
            "rgba(0,0,0, 0.9)",
            "rgba(0,0,0, 0.8)",
            "rgba(0,0,0, 0.6)",
            "rgba(0,0,0, 0.0)",
            "rgba(0,0,0,0.0)",
            "rgba(0,0,0, 0.0)",
          ]}
          style={{
            position: "absolute",
            width: "100%",
            height: "50%",
          }}
        />
      </View>
      <View
        style={{
          position: "absolute",
          top: 24,
          width: "100%",
          height: 50,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 22,
          }}
        >
          {props.text}
        </Text>
        <TouchableOpacity
          onPress={props.onPress}
          style={{
            position: "absolute",
            width: 48,
            height: 48,
            borderRadius: 25,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MaterialCommunityIcons name="arrow-left" color="white" size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
