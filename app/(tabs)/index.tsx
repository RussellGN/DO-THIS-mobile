import PageSkeleton from "@/lib/components/PageSkeleton";
import Todo from "@/lib/components/Todo";
import TodoForm from "@/lib/components/TodoForm";
import TodoSearch from "@/lib/components/TodoSearch";
import { iconSize, theme } from "@/lib/constants";
import useTodos from "@/lib/hooks/useTodos";
import { MaterialIcons } from "@expo/vector-icons";
import { truncate } from "lodash";
import { ActivityIndicator, FlatList, ScrollView, Text, View } from "react-native";

export default function Index() {
  const { todos, isLoading, error } = useTodos();
  console.log(error);
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

      <TodoForm />
    </PageSkeleton>
  );
}
