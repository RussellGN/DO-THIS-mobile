import PageSkeleton from "@/lib/components/PageSkeleton";
import Todo from "@/lib/components/Todo";
import useTodos from "@/lib/hooks/useTodos";
import { FlatList, Text } from "react-native";

export default function Done() {
  const { todos } = useTodos();

  return (
    <PageSkeleton>
      <FlatList
        className="py-4 px-2"
        data={todos}
        renderItem={({ item }) => <Todo todo={item} />}
        keyExtractor={(item) => item.id}
      />
    </PageSkeleton>
  );
}
