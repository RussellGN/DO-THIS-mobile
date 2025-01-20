import useTodos from "@/lib/hooks/useTodos";
import TodoForm from "@/lib/components/TodoForm";
import TodoSearch from "@/lib/components/TodoSearch";
import PageSkeleton from "@/lib/components/PageSkeleton";
import TodoList from "@/lib/components/TodoList";
import { filterTodos } from "@/lib/utils";
import { useState } from "react";
import { Filter } from "@/lib/types";

export default function Index() {
  const { todos, isLoading, error, isRefreshing, refresh, loadTodos: reloadTodos } = useTodos();
  const [query, setQuery] = useState<string | undefined>();

  const filter: Filter = { done: false, ...(query ? { query } : {}) };
  const mappableTodos = filterTodos(todos, filter);

  return (
    <PageSkeleton>
      <TodoSearch {...{ query, setQuery }} />

      <TodoList
        {...{ todos, mappableTodos, isLoading, error, isRefreshing, refresh, reloadTodos }}
      />

      <TodoForm todos={todos} reloadTodos={reloadTodos} />
    </PageSkeleton>
  );
}
