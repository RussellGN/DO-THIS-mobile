import "./global.css";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { DARK_STYLES, THEME } from "@/lib/constants";

export default function RootLayout() {
  return (
    <SafeAreaProvider style={{ ...DARK_STYLES.container, padding: 8 }}>
      <StatusBar barStyle={"light-content"} backgroundColor={THEME.pallete.dark[100]} />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </SafeAreaProvider>
  );
}
