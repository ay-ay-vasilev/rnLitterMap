import React from "react";
import { View, Text } from "react-native";
import { Card, Paragraph } from "react-native-paper";

export default function AccountPropertyCard(props) {
  return (
    <View style={{ margin: 8 }}>
      <Card>
        <Card.Content>
          <Paragraph style={{ lineHeight: 30 }}>
            <Text style={{ color: props.colors.PRIMARY_SOLID, fontSize: 17 }}>
              {props.propertyName}
              {`\n`}
            </Text>
            <Text style={{ color: props.colors.TEXT_DARK, fontSize: 20 }}>
              {props.propertyValue}
            </Text>
          </Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
}
