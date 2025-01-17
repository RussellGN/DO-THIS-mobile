import { Link } from "expo-router";
import { View, Text } from "react-native";
import { capitalize } from "lodash";
import { MaterialIcons } from "@expo/vector-icons";
import { DARK_STYLES, ICON_SIZE, THEME } from "../constants";

export default function TabsHeader({ route }: { route: string }) {
  return (
    <View
      style={{ ...DARK_STYLES.container }}
      className="pb-3 flex flex-row items-center justify-between"
    >
      <Text className="text-white" style={{ fontSize: 24 }}>
        {capitalize(route)}
      </Text>

      <Link href="/info">
        <MaterialIcons name="info-outline" size={ICON_SIZE} color={THEME.pallete.primary} />
      </Link>
    </View>
  );
}
