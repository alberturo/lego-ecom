import React from "react";
import { StyleSheet } from "react-native";

const tintColorLight = "#2f95dc";
const tintColorDark = "#e7e7e7";

export const darkMode = StyleSheet.create({
  dark: {
    text: "#F2F2F4",
    background: "#0D0D0D",
    tint: tintColorDark,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorDark,
  },
});
export const lightMode = StyleSheet.create({
  light: {
    text: "#0D0D0D",
    background: "#F2F2F4",
    tint: tintColorLight,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,
  },
});
