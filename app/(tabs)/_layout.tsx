import TabsHeader from "@/lib/components/TabsHeader";
import { THEME, DARK_STYLES, ICON_SIZE } from "@/lib/constants";
import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Text } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        header: ({ route }) => <TabsHeader route={route.name === "index" ? "Todos" : route.name} />,
        tabBarStyle: {
          ...DARK_STYLES.container,
          height: 60,
        },
        tabBarLabel: ({ focused, children }) => (
          <Text style={{ color: focused ? THEME.pallete.primary : "gray", marginTop: 4 }}>
            {children}
          </Text>
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Todos",
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="home"
              color={focused ? THEME.pallete.primary : "gray"}
              size={ICON_SIZE}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="done"
        options={{
          title: "Done",
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="done"
              color={focused ? THEME.pallete.primary : "gray"}
              size={ICON_SIZE}
            />
          ),
        }}
      />
    </Tabs>
  );
}
