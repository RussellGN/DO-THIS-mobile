import { View, Text, TouchableOpacity } from "react-native";
import { type Todo as TodoType } from "../types";
import { MaterialIcons } from "@expo/vector-icons";
import { ICON_SIZE, THEME } from "../constants";
import useUpdateTodo from "../hooks/useUpdateTodo";
import useDeleteTodo from "../hooks/useDeleteTodo";

type propTypes = {
  todo: TodoType;
  todos: TodoType[];
  reloadTodos: () => void;
};

export default function Todo({ todo, todos, reloadTodos }: propTypes) {
  const { isLoading: isUpdating, updateTodo } = useUpdateTodo(todos, reloadTodos);
  const { isLoading: isDeleting, deleteTodo } = useDeleteTodo(todos, reloadTodos);

  return (
    <View className="mb-3">
      <View
        style={{ borderRadius: 5, backgroundColor: THEME.pallete.dark[200] }}
        className="px-3 py-2 flex shadow-md flex-row justify-between items-start gap-3"
      >
        <Text className="flex-grow flex-shrink text-white pr-3">{todo.content}</Text>

        <TouchableOpacity disabled={isUpdating || isDeleting} onPress={() => deleteTodo(todo.id)}>
          <MaterialIcons
            name="delete-outline"
            color={THEME.pallete.danger}
            size={ICON_SIZE / 1.4}
            style={{ opacity: isUpdating || isDeleting ? 0.5 : 1 }}
          />
        </TouchableOpacity>

        {!todo.done && (
          <TouchableOpacity
            disabled={isUpdating || isDeleting}
            onPress={() => updateTodo({ ...todo, done: true })}
          >
            <MaterialIcons
              name="check-circle-outline"
              color={THEME.pallete.success}
              size={ICON_SIZE / 1.4}
              style={{ opacity: isUpdating || isDeleting ? 0.5 : 1 }}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
