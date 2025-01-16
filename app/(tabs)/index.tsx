import PageSkeleton from "@/lib/components/PageSkeleton";
import Todo from "@/lib/components/Todo";
import TodoForm from "@/lib/components/TodoForm";
import TodoSearch from "@/lib/components/TodoSearch";
import useTodos from "@/lib/hooks/useTodos";
import { FlatList, ScrollView, View } from "react-native";

export default function Index() {
  const { todos } = useTodos();

  return (
    <PageSkeleton>
      <TodoSearch />

      <FlatList
        className="py-4 px-2"
        data={todos}
        renderItem={({ item }) => <Todo todo={item} />}
        keyExtractor={(item) => item.id}
      />

      <TodoForm />
    </PageSkeleton>
  );
}
