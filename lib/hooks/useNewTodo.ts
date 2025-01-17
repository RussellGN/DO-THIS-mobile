import useTodos from "./useTodos";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRef, useState } from "react";
import { Alert, TextInput } from "react-native";
import { generateId } from "../utils";
import { Todo } from "../types";

export default function useNewTodo(reloadTodos: () => void) {
  const [isLoading, setIsLoading] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const inputRef = useRef<TextInput | null>(null);
  const { todos } = useTodos();

  function createTodo(content: string) {
    setIsLoading(true);

    const newTodo: Todo = {
      content,
      date: new Date().toString(),
      done: false,
      id: generateId(),
    };

    AsyncStorage.setItem("todos", JSON.stringify([...todos, newTodo]))
      .then(() => {
        reloadTodos();
        setIsLoading(false);
      })
      .catch((reason) => {
        Alert.alert("Failed to add TODO", `Error: ${reason}`);
        setIsLoading(false);
      });
  }

  return { createTodo, isLoading, inputRef, isInputFocused, setIsInputFocused };
}
