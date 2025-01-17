import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { Alert } from "react-native";
import { Todo } from "../types";

export default function useDeleteTodo(todos: Todo[], reloadTodos: () => void) {
  const [isLoading, setIsLoading] = useState(false);

  function deleteTodo(id: string) {
    setIsLoading(true);

    const updatedTodos = todos.filter((todo) => todo.id !== id);

    AsyncStorage.setItem("todos", JSON.stringify(updatedTodos))
      .then(() => {
        reloadTodos();
        setIsLoading(false);
      })
      .catch((reason) => {
        Alert.alert("Failed to delete TODO", `Error: ${reason}`);
        setIsLoading(false);
      });
  }

  return { deleteTodo, isLoading };
}
