import React from "react";
import { View, Text } from "react-native";
import { useTheme } from "react-native-paper";

import styles from "../styles/styles";
// Custom components
import { PhotoMenuNotCleaned } from "../components/PhotoMenu";
import RaisedButton from "../components/RaisedButton";
import RadioList from "../components/RadioList";

export default function AddTrashCardScreen({ navigation }) {
  const { colors } = useTheme();

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
        <View style={styles.centeredCommonWrapper}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Размер мусора
          </Text>
        </View>

        <View style={styles.radioListWrapper}>
          <RadioList
            options={["Один пакет", "Несколько пакетов", "Грузовая машина"]}
          />
        </View>

        <View style={styles.centeredCommonWrapper}>
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
