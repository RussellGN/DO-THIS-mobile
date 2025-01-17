import PageSkeleton from "@/lib/components/PageSkeleton";
import TodoList from "@/lib/components/TodoList";
import useTodos from "@/lib/hooks/useTodos";
import { filterTodos } from "@/lib/utils";

export default function Done() {
  const { todos, error, isLoading, isRefreshing, refresh, loadTodos: reloadTodos } = useTodos();

  const mappableTodos = filterTodos(todos, { done: true });

  return (
    <PageSkeleton>
      <TodoList
        {...{ todos, mappableTodos, isLoading, error, isRefreshing, refresh, reloadTodos }}
      />
    </PageSkeleton>
  );
}
