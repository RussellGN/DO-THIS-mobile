import Todo from "@/lib/components/Todo";
import useTodos from "@/lib/hooks/useTodos";
import TodoForm from "@/lib/components/TodoForm";
import TodoSearch from "@/lib/components/TodoSearch";
import PageSkeleton from "@/lib/components/PageSkeleton";
import { ActivityIndicator, FlatList, Text } from "react-native";
import { iconSize, theme } from "@/lib/constants";
import { MaterialIcons } from "@expo/vector-icons";
import { truncate } from "lodash";

export default function Index() {
  const { todos, isLoading, error, loadTodos: reloadTodos } = useTodos();

  return (
    <PageSkeleton>
      <TodoSearch />

      <FlatList
        className="py-4 px-2"
        data={todos}
        renderItem={({ item }) => <Todo todo={item} />}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() =>
          isLoading ? (
            <ActivityIndicator size="large" color={theme.pallete.primary} />
          ) : error ? (
            <Text className="text-[#a9a9a9] text-center p-10">
              <MaterialIcons name="warning" color={theme.pallete.danger} size={iconSize} />
              {"\n"}
              Error encountered fetching todos: {truncate(error, { length: 200 })}
            </Text>
          ) : (
            <Text className="text-[#a9a9a9] text-center p-10">No todos found, lets add some!</Text>
          )
        }
      />

      <TodoForm reloadTodos={reloadTodos} />
    </PageSkeleton>
  );
}
