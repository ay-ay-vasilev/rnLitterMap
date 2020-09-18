import "react-native-gesture-handler";

import React from "react";
import { StatusBar } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import LoginNavigation from "./src/navigation/LoginNavigation";
import theme from "./src/styles/theme.style";

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <StatusBar translucent={true} />
      <LoginNavigation />
    </PaperProvider>
  );
}
