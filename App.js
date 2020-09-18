import "react-native-gesture-handler";

import React from "react";
import { StatusBar } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import LoginNavigation from "./src/navigation/LoginNavigation";
import theme from "./src/styles/theme.style";

import ViewTrashNotCleanedScreen from "./src/screens/ViewTrashNotCleanedScreen";

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <StatusBar translucent={true} />
      {/* <LoginNavigation /> */}
      <ViewTrashNotCleanedScreen />
    </PaperProvider>
  );
}
