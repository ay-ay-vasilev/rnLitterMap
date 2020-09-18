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
