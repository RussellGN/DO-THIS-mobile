import { View, Text, TouchableOpacity } from "react-native";
import { type Todo as TodoType } from "../types";
import { MaterialIcons } from "@expo/vector-icons";
import { iconSize, theme } from "../constants";
import useUpdateTodo from "../hooks/useUpdateTodo";

type propTypes = {
  todo: TodoType;
  todos: TodoType[];
  reloadTodos: () => void;
};

export default function Todo({ todo, todos, reloadTodos }: propTypes) {
  const { isLoading, updateTodo } = useUpdateTodo(todos, reloadTodos);

  return (
    <View className="mb-3">
      <View
        style={{ borderRadius: 5, backgroundColor: theme.pallete.dark[200] }}
        className="p-2 flex shadow-md flex-row justify-between items-start gap-2"
      >
        <Text className="flex-grow flex-shrink text-white pr-3">{todo.content}</Text>

        <TouchableOpacity disabled={isLoading}>
          <MaterialIcons
            name="delete-outline"
            color={theme.pallete.danger}
            size={iconSize / 1.6}
            style={{ opacity: isLoading ? 0.5 : 1 }}
          />
        </TouchableOpacity>

        {!todo.done && (
          <TouchableOpacity
            disabled={isLoading}
            onPress={() => updateTodo({ ...todo, done: true })}
          >
            <MaterialIcons
              name="check-circle-outline"
              color={theme.pallete.success}
              size={iconSize / 1.6}
              style={{ opacity: isLoading ? 0.5 : 1 }}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
