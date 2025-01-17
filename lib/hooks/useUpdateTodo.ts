import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { Alert } from "react-native";
import { Todo } from "../types";

export default function useUpdateTodo(todos: Todo[], reloadTodos: () => void) {
  const [isLoading, setIsLoading] = useState(false);

  function updateTodo(updatedTodo: Todo) {
    setIsLoading(true);

    const updatedTodos = todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo));

    AsyncStorage.setItem("todos", JSON.stringify(updatedTodos))
      .then(() => {
        reloadTodos();
        setIsLoading(false);
      })
      .catch((reason) => {
        Alert.alert("Failed to update TODO", `Error: ${reason}`);
        setIsLoading(false);
      });
  }

  return { updateTodo, isLoading };
}
