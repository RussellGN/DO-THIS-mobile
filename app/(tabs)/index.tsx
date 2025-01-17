import useTodos from "@/lib/hooks/useTodos";
import TodoForm from "@/lib/components/TodoForm";
import TodoSearch from "@/lib/components/TodoSearch";
import PageSkeleton from "@/lib/components/PageSkeleton";
import TodoList from "@/lib/components/TodoList";
import { filterTodos } from "@/lib/utils";

export default function Index() {
  const { todos, isLoading, error, isRefreshing, refresh, loadTodos: reloadTodos } = useTodos();
  const mappableTodos = filterTodos(todos, { done: false });

  return (
    <PageSkeleton>
      <TodoSearch />

      <TodoList
        {...{ todos, mappableTodos, isLoading, error, isRefreshing, refresh, reloadTodos }}
      />

      <TodoForm todos={todos} reloadTodos={reloadTodos} />
    </PageSkeleton>
  );
}
