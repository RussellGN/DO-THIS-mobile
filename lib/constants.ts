import { StyleSheet } from "react-native";
import * as Application from "expo-application";

export const THEME = {
  pallete: {
    primary: "rgb(26, 132, 146)",
    secondary: "rgb(37, 102, 142)",
    dark: {
      100: "rgb(19, 29, 35)",
      200: "rgb(29, 39, 45)",
    },
    success: "rgb(44, 146, 75)",
    danger: "rgb(182, 49, 71)",
    warning: "rgb(212, 143, 40)",
  },
};

export const DARK_STYLES = StyleSheet.create({
  container: {
    backgroundColor: THEME.pallete.dark[100],
    color: "white",
  },
});

export const ICON_SIZE = 32;

export const APP_VERSION = Application.nativeBuildVersion;

export const APP_NAME = Application.applicationName;

export const GITHUB_REPO = "https://github.com/RussellGN/DO-THIS-mobile";
