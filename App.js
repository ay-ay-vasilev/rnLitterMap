import React from "react";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import Main from "./src/Main";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#00dddd",
    secondary: "#cccccc",
    accent: "#f1c40f",
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Main />
    </PaperProvider>
  );
}
