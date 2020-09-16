import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Avatar, Card, Paragraph, FAB, useTheme } from "react-native-paper";

import RaisedButton from "../components/RaisedButton";

export default function AccountScreen({ navigation }) {
  const { colors } = useTheme();

  return (
    <View>
      <ScrollView>
        <View style={{ alignItems: "center", marginTop: 30, marginBottom: 30 }}>
          <Avatar.Image
            size={172}
            source={require("../assets/no-img-new.png")}
          />

          <View style={{ position: "absolute", top: "70%", left: "60%" }}>
            <FAB
              small
              color="white"
              icon="pencil"
              style={{ backgroundColor: colors.PRIMARY_SOLID }}
            />
          </View>
        </View>

        <View style={{ margin: 8 }}>
          <Card>
            <Card.Content>
              <Paragraph style={{ lineHeight: 30 }}>
                <Text style={{ color: colors.PRIMARY_SOLID, fontSize: 17 }}>
                  Имя{`\n`}
                </Text>
                <Text style={{ color: colors.TEXT_DARK, fontSize: 20 }}>
                  Иванов
                </Text>
              </Paragraph>
            </Card.Content>
          </Card>
        </View>

        <View style={{ margin: 8 }}>
          <Card>
            <Card.Content>
              <Paragraph style={{ lineHeight: 30 }}>
                <Text style={{ color: colors.PRIMARY_SOLID, fontSize: 17 }}>
                  Дата рождения{`\n`}
                </Text>
                <Text style={{ color: colors.TEXT_DARK, fontSize: 20 }}>
                  01.01.2000
                </Text>
              </Paragraph>
            </Card.Content>
          </Card>
        </View>
        <View style={{ margin: 8 }}>
          <Card>
            <Card.Content>
              <Paragraph style={{ lineHeight: 30 }}>
                <Text style={{ color: colors.PRIMARY_SOLID, fontSize: 17 }}>
                  Статус{`\n`}
                </Text>
                <Text style={{ color: colors.TEXT_DARK, fontSize: 20 }}>
                  Убираю
                </Text>
              </Paragraph>
            </Card.Content>
          </Card>
        </View>
        <View style={{ margin: 8 }}>
          <Card>
            <Card.Content>
              <Paragraph style={{ lineHeight: 30 }}>
                <Text style={{ color: colors.PRIMARY_SOLID, fontSize: 17 }}>
                  Имя пользователя{`\n`}
                </Text>
                <Text style={{ color: colors.TEXT_DARK, fontSize: 20 }}>
                  @username
                </Text>
              </Paragraph>
            </Card.Content>
          </Card>
        </View>

        <View style={{ alignItems: "center", marginTop: 20, marginBottom: 20 }}>
          <RaisedButton
            navigation={navigation}
            path="Account"
            text="Сохранить"
          />
        </View>
      </ScrollView>
    </View>
  );
}
