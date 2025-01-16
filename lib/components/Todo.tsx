import { View, Text, TouchableOpacity } from "react-native";
import { type Todo as TodoType } from "../types";
import { MaterialIcons } from "@expo/vector-icons";
import { iconSize, theme } from "../constants";

export default function Todo({ todo }: { todo: TodoType }) {
  return (
    <View className="mb-3">
      <View
        style={{ borderRadius: 5, backgroundColor: theme.pallete.dark[200] }}
        className="p-2 flex shadow-md flex-row justify-between items-start gap-2"
      >
        <Text className="flex-grow flex-shrink text-white pr-3">{todo.content}</Text>

        <TouchableOpacity>
          <MaterialIcons name="delete-outline" color={theme.pallete.danger} size={iconSize / 1.6} />
        </TouchableOpacity>

        <TouchableOpacity>
          <MaterialIcons
            name="check-circle-outline"
            color={theme.pallete.success}
            size={iconSize / 1.6}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
