import { Dimensions, StyleSheet } from "react-native";

import theme from "./theme.style";

export default StyleSheet.create({
  containerWhite: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  containerBlack: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  containerTransparent: { flex: 1, width: "100%", alignItems: "center" },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  // IMAGES
  loginLogo: {
    width: 170,
    height: 170,
  },
  loginLogoSmall: {
    width: 140,
    height: 140,
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
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  fabButtonBig: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
  },
  // WRAPPERS
  radioListWrapper: {
    width: "100%",
    borderTopColor: theme.colors.LIGHT_GREY,
    borderTopWidth: 1,
    borderBottomColor: theme.colors.LIGHT_GREY,
    borderBottomWidth: 1,
    alignItems: "flex-start",
  },
  commonWrapper: {
    width: "100%",
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  centeredCommonWrapper: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 20,
  },

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
  fabButtonCameraWrapper: {
    position: "absolute",
    top: "60%",
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
  whiteTextBig: { color: "white", textAlign: "center", fontSize: 18 },
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
