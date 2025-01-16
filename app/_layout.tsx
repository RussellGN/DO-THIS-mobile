import "./global.css";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { darkStyles, theme } from "@/lib/constants";

export default function RootLayout() {
  return (
    <SafeAreaProvider style={{ ...darkStyles.container, padding: 8 }}>
      <StatusBar barStyle={"light-content"} backgroundColor={theme.pallete.dark[100]} />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </SafeAreaProvider>
  );
}
