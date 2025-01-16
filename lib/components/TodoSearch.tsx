import { View, TextInput } from "react-native";
import { iconSize } from "../constants";
import { MaterialIcons } from "@expo/vector-icons";

export default function TodoSearch() {
  return (
    <View className="py-3 px-1">
      <View
        className="py-1 px-4 flex shadow-lg flex-row items-center justify-between bg-[gray]"
        style={{ borderRadius: 12 }}
      >
        <TextInput
          placeholder="Search todos.."
          placeholderTextColor="rgb(218, 218, 218)"
          className="text-white text-white fs-4 shadow-none outline-0 border-0"
        />
        <MaterialIcons name="search" size={iconSize - 2} color="rgb(218, 218, 218)" />
      </View>
    </View>
  );
}
