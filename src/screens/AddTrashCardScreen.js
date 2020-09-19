import React, { useState } from "react";
import { View, Text } from "react-native";
import { useTheme, RadioButton } from "react-native-paper";

import styles from "../styles/styles";
// Custom components
import InfoList from "../components/InfoList";
import UserCard from "../components/UserCard";
import { GradientHighlightGreen } from "../components/GradientHighlight";
import { PhotoMenuNotCleaned } from "../components/PhotoMenu";
import RaisedButton from "../components/RaisedButton";

import { fakeUser } from "../test/testData";

export default function AddTrashCardScreen({ navigation }) {
  const { colors } = useTheme();
  const [checked, setChecked] = useState("first");

  return (
    <View style={{ flex: 1 }}>
      <PhotoMenuNotCleaned
        photo={require("../assets/no-img-new.png")}
        text="ФОТО МУСОРА"
        onPress={() => navigation.goBack()}
      />

      <View
        style={{
          flex: 1,
          width: "100%",
          alignItems: "center",
        }}
      >
        <GradientHighlightGreen />
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 20,
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>
            Размер мусора
          </Text>
        </View>

        <View
          style={{
            width: "100%",
            flex: 1,
            borderTopColor: colors.LIGHT_GREY,
            borderTopWidth: 1,
            borderBottomColor: colors.LIGHT_GREY,
            borderBottomWidth: 1,
            alignItems: "flex-start",
            justifyContent: "center",
            marginLeft: 60,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <RadioButton
              value="first"
              status={checked === "first" ? "checked" : "unchecked"}
              onPress={() => setChecked("first")}
              color={colors.PRIMARY_SOLID}
            />
            <Text style={{ textAlignVertical: "center" }}>Один пакет</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <RadioButton
              value="second"
              status={checked === "second" ? "checked" : "unchecked"}
              onPress={() => setChecked("second")}
              color={colors.PRIMARY_SOLID}
            />
            <Text style={{ textAlignVertical: "center" }}>
              Несколько пакетов
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <RadioButton
              value="third"
              status={checked === "third" ? "checked" : "unchecked"}
              onPress={() => setChecked("third")}
              color={colors.PRIMARY_SOLID}
            />
            <Text style={{ textAlignVertical: "center" }}>Грузовая машина</Text>
          </View>
        </View>

        <View
          style={{
            width: "100%",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <RaisedButton
            onPress={() => navigation.navigate("AddTrashCard")}
            text="Добавить"
            buttonStyle={styles.raisedButton}
            textStyle={styles.whiteTextSmall}
          />
        </View>
      </View>
    </View>
  );
}
