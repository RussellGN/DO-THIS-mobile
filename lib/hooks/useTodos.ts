import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Todo } from "../types";

export default function useTodos() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    setIsLoading(true);
    setError(undefined);

    AsyncStorage.getItem("todos")
      .then((serializedTodos) => {
        if (serializedTodos) setTodos(JSON.parse(serializedTodos));
        else setTodos([]);
        setIsLoading(false);
      })
      .catch((reason) => {
        setError(reason);
        setIsLoading(false);
      });
  }, []);

  return { todos, isLoading, error };
}
