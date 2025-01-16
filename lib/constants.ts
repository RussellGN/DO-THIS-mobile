import { StyleSheet } from "react-native";

export const theme = {
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

export const darkStyles = StyleSheet.create({
   container: {
      backgroundColor: theme.pallete.dark[100],
      color: "white",
   },
});
