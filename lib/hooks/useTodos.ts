import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Todo } from "../types";
import { Alert } from "react-native";

export default function useTodos() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  async function loadTodosAsync() {
    setIsLoading(true);
    setError(undefined);

    try {
      const serializedTodos = await AsyncStorage.getItem("todos");
      if (serializedTodos) setTodos(JSON.parse(serializedTodos));
      else setTodos([]);
    } catch (reason) {
      setError(String(reason));
    }

    setIsLoading(false);
  }

  function loadTodos() {
    loadTodosAsync().finally();
  }

  function refresh() {
    setIsRefreshing(true);

    loadTodosAsync()
      .then(() => {
        setIsRefreshing(false);
      })
      .catch((reason) => {
        setError(`Failed to refresh todos: ${reason}`);
        setIsRefreshing(false);
      });
  }

  useEffect(loadTodos, []);

  return { todos, isLoading, error, isRefreshing, refresh, setIsRefreshing, loadTodos };
}
