import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export function GradientHighlightRed() {
  return (
    <LinearGradient
      colors={[
        "rgba(255,0,0, 0.9)",
        "rgba(255,0,0, 0.6)",
        "rgba(255,0,0, 0.2)",
        "rgba(255,0,0, 0.0)",
      ]}
      style={{
        width: "100%",
        height: 20,
      }}
    />
  );
}

export function GradientHighlightGreen() {
  return (
    <LinearGradient
      colors={[
        "rgba(0,255,0, 0.9)",
        "rgba(0,255,0, 0.6)",
        "rgba(0,255,0, 0.2)",
        "rgba(0,255,0, 0.0)",
      ]}
      style={{
        width: "100%",
        height: 20,
      }}
    />
  );
}

export function GradientBlack() {
  return (
    <LinearGradient
      colors={[
        "rgba(0,0,0, 0.8)",
        "rgba(0,0,0, 0.6)",
        "rgba(0,0,0, 0.4)",
        "rgba(0,0,0, 0.0)",
        "rgba(0,0,0,0.0)",
        "rgba(0,0,0, 0.0)",
      ]}
      style={{
        position: "absolute",
        width: "100%",
        height: "50%",
      }}
    />
  );
}
