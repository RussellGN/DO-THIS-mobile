import { Link } from "expo-router";
import { View, Text } from "react-native";
import { capitalize } from "lodash";
import { MaterialIcons } from "@expo/vector-icons";
import { darkStyles, theme } from "../constants";

export default function TabsHeader({ route }: { route: string }) {
   return (
      <View style={{ ...darkStyles.container }} className="pb-3 flex flex-row items-center justify-between">
         <Text className="text-white" style={{ fontSize: 24 }}>
            {capitalize(route)}
         </Text>

         <Link href="/about">
            <MaterialIcons name="info-outline" size={32} color={theme.pallete.primary} />
         </Link>
      </View>
   );
}
