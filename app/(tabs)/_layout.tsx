import TabsHeader from "@/lib/components/TabsHeader";
import { theme, darkStyles, iconSize } from "@/lib/constants";
import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Text } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        header: ({ route }) => <TabsHeader route={route.name === "index" ? "Todos" : route.name} />,
        tabBarStyle: {
          ...darkStyles.container,
          height: 60,
        },
        tabBarLabel: ({ focused, children }) => (
          <Text style={{ color: focused ? theme.pallete.primary : "gray", marginTop: 4 }}>
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
              color={focused ? theme.pallete.primary : "gray"}
              size={iconSize}
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
              color={focused ? theme.pallete.primary : "gray"}
              size={iconSize}
            />
          ),
        }}
      />
    </Tabs>
  );
}
