import React from "react";
import { View, Text } from "react-native";
import { Avatar, Card, Title, Paragraph } from "react-native-paper";

import RaisedButton from "../components/RaisedButton";
import styles from "../styles/styles";

export default function AccountScreen({ navigation }) {
  return (
    <View>
      <View style={{ alignItems: "center", marginTop: 30, marginBottom: 30 }}>
        <Avatar.Image size={172} source={require("../assets/no-img.png")} />
      </View>

      <View style={{ margin: 10 }}>
        <Card>
          <Card.Content>
            <Title>Test</Title>
            <Paragraph>Testtest</Paragraph>
          </Card.Content>
        </Card>
      </View>
      <View style={{ margin: 10 }}>
        <Card>
          <Card.Content>
            <Title>Test</Title>
            <Paragraph>Testtest</Paragraph>
          </Card.Content>
        </Card>
      </View>
      <View style={{ margin: 10 }}>
        <Card>
          <Card.Content>
            <Title>Test</Title>
            <Paragraph>Testtest</Paragraph>
          </Card.Content>
        </Card>
      </View>
      <View style={{ margin: 10 }}>
        <Card>
          <Card.Content>
            <Title>Test</Title>
            <Paragraph>Testtest</Paragraph>
          </Card.Content>
        </Card>
      </View>

      <View style={{ alignItems: "center", marginTop: 30 }}>
        <RaisedButton navigation={navigation} path="Account" text="Сохранить" />
      </View>
    </View>
  );
}
