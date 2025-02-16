import { MaterialIcons } from "@expo/vector-icons";
import { View, Text } from "react-native";
import { capitalize } from "lodash";
import { DARK_STYLES, ICON_SIZE } from "../constants";
import { Link } from "expo-router";

export default function StackHeader({ route }: { route: string }) {
  return (
    <View
      style={{ ...DARK_STYLES.container, position: "relative" }}
      className="pb-3 flex flex-row justify-center items-center"
    >
      <Link href=".." style={{ position: "absolute", top: 0, left: 0 }}>
        <MaterialIcons name="arrow-back" size={ICON_SIZE} color="gray" />
      </Link>

      <Text className="text-white text-center" style={{ fontSize: 24 }}>
        {capitalize(route)}
      </Text>
    </View>
  );
}
