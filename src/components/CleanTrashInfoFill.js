import React from "react";
import { View, Text } from "react-native";
import { Switch, useTheme } from "react-native-paper";

const CleanTrashInfroFill = () => {
  return (
    <View style={styles.commonWrapper}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <View
          style={{
            position: "absolute",
            width: "100%",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Убрано мной
          </Text>
        </View>
        <Switch
          color={colors.PRIMARY_SOLID}
          value={isSwitchOn}
          onValueChange={() => setIsSwitchOn(!isSwitchOn)}
          style={{ marginLeft: 20 }}
        />
      </View>
    </View>
  );
};
export default CleanTrashInfroFill;
