import "react-native-gesture-handler";

import React from "react";
import { StatusBar } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import LoginNavigation from "./src/navigation/LoginNavigation";
import theme from "./src/styles/theme.style";
import moment from "moment";
import "moment/locale/ru";
import { YellowBox } from "react-native";
YellowBox.ignoreWarnings(["Setting a timer"]);

export default function App() {
  moment.locale("ru");

  return (
    <PaperProvider theme={theme}>
      <StatusBar translucent={true} />
      <LoginNavigation />
    </PaperProvider>
  );
}
