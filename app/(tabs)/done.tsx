import PageSkeleton from "@/lib/components/PageSkeleton";
import TodoList from "@/lib/components/TodoList";
import useTodos from "@/lib/hooks/useTodos";

export default function Done() {
  const { todos, error, isLoading, isRefreshing, refresh, loadTodos: reloadTodos } = useTodos();

  return (
    <PageSkeleton>
      <TodoList {...{ todos, isLoading, error, isRefreshing, refresh, reloadTodos }} />
    </PageSkeleton>
  );
}
