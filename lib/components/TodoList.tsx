import { Text, FlatList, RefreshControl, ActivityIndicator } from "react-native";
import { type Todo as TodoType } from "../types";
import { MaterialIcons } from "@expo/vector-icons";
import { ICON_SIZE, THEME } from "../constants";
import { truncate } from "lodash";
import Todo from "./Todo";

type propTypes = {
  todos: TodoType[];
  mappableTodos?: TodoType[];
  error: string | undefined;
  isLoading: boolean;
  isRefreshing: boolean;
  refresh: () => void;
  reloadTodos: () => void;
};

export default function TodoList({
  todos,
  mappableTodos,
  isLoading,
  error,
  isRefreshing,
  refresh,
  reloadTodos,
}: propTypes) {
  return (
    <FlatList
      className="py-4 px-2"
      data={mappableTodos || todos}
      renderItem={({ item }) => <Todo todo={item} todos={todos} reloadTodos={reloadTodos} />}
      keyExtractor={(item) => item.id}
      refreshing={isRefreshing}
      refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={refresh} />}
      ListEmptyComponent={() =>
        isLoading ? (
          <ActivityIndicator size="large" color={THEME.pallete.primary} />
        ) : error ? (
          <Text className="text-[#a9a9a9] text-center p-10">
            <MaterialIcons name="warning" color={THEME.pallete.danger} size={ICON_SIZE} />
            {"\n"}
            Error encountered fetching todos: {truncate(error, { length: 200 })}
          </Text>
        ) : (
          <Text className="text-[#a9a9a9] text-center p-10">No todos found, lets add some!</Text>
        )
      }
    />
  );
}
