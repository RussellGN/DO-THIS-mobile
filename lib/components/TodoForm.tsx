import { View, TextInput, TouchableOpacity } from "react-native";
import { iconSize, theme } from "../constants";
import { MaterialIcons } from "@expo/vector-icons";

export default function TodoForm() {
  return (
    <View className="px-0.5">
      <View
        className="flex shadow-lg flex-row items-center justify-between bg-[gray]"
        style={{
          borderRadius: 12,
          borderStartEndRadius: 0,
          borderEndEndRadius: 0,
        }}
      >
        <TextInput
          placeholder="New todo (click to type)"
          placeholderTextColor="rgb(218, 218, 218)"
          className="text-white py-1 px-4 flex-grow text-white fs-4 shadow-none outline-0 border-0"
        />

        <TouchableOpacity
          style={{
            backgroundColor: theme.pallete.primary,
            borderEndStartRadius: 12,
          }}
          className="p-2"
        >
          <MaterialIcons size={iconSize} color="white" name="add" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
