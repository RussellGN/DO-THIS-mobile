import { View, TextInput } from "react-native";
import { ICON_SIZE } from "../constants";
import { MaterialIcons } from "@expo/vector-icons";

type propTypes = { query: string | undefined; setQuery: (str: string) => void };

export default function TodoSearch({ query, setQuery }: propTypes) {
  return (
    <View className="py-3 px-1">
      <View
        className="py-1 px-4 flex shadow-lg flex-row items-center justify-between bg-[gray]"
        style={{ borderRadius: 12 }}
      >
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="Search todos.."
          placeholderTextColor="rgb(218, 218, 218)"
          className="text-white fs-4 shadow-none outline-0 border-0"
        />
        <MaterialIcons name="search" size={ICON_SIZE - 2} color="rgb(218, 218, 218)" />
      </View>
    </View>
  );
}
