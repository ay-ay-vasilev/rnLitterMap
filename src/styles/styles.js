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
  loginLogoWrapper: {
    alignSelf: "center",
  },
  buttonBottomRaised: {
    position: "absolute",
    top: "90%",
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
  },
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
  buttonLogin: {
    width: 168,
    height: 36,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  whiteText: {
    color: "white",
  },
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
