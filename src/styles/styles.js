import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";

import theme from "./theme.style";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  loginLogo: {
    width: 170,
    height: 170,
  },
  // BUTTONS
  buttonGradient: {
    padding: 25,
    alignItems: "center",
    borderRadius: 25,
  },
  bottomNavButtonGradient: {
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
  },
  raisedButton: {
    width: 168,
    height: 36,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  raisedButtonBig: {
    width: 222,
    height: 45,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  fabButtonSmall: {
    width: 36,
    height: 36,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  fabButtonBig: {
    width: 48,
    height: 48,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  // WRAPPERS
  loginLogoWrapper: {
    alignSelf: "center",
  },
  buttonBottomRaisedWrapper: {
    position: "absolute",
    top: "90%",
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
  },
  fabButtonLocationWrapper: {
    position: "absolute",
    top: "80%",
    left: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  // TEXT
  whiteTextSmall: {
    color: "white",
    fontSize: 14,
  },
  whiteTextMedium: {
    color: "white",
    fontSize: 20,
  },
  // CARDLISTS
  cardListTitle1Cleaned: {
    color: theme.colors.PRIMARY_SOLID,
    fontWeight: "bold",
    fontSize: 16,
  },
  cardListTitle1NotCleaned: {
    color: theme.colors.SECONDARY_SOLID,
    fontWeight: "bold",
    fontSize: 16,
  },
  cardListTitle2: {
    color: "black",
    fontWeight: "bold",
  },
  cardListTitle3: {
    color: "black",
  },
});
