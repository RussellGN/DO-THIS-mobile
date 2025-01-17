import { View, TextInput, TouchableOpacity } from "react-native";
import { ICON_SIZE, THEME } from "../constants";
import { MaterialIcons } from "@expo/vector-icons";
import useNewTodo from "../hooks/useNewTodo";
import { Todo } from "../types";

type propTypes = {
  todos: Todo[];
  reloadTodos: () => void;
};

export default function TodoForm({ todos, reloadTodos }: propTypes) {
  const { createTodo, isLoading, inputRef, isInputFocused, setIsInputFocused } = useNewTodo(
    todos,
    reloadTodos
  );

  return (
    <View className="px-0.5">
      <View
        className="flex shadow-lg flex-row items-center justify-between bg-[gray]"
        style={{
          borderRadius: 12,
          borderStartEndRadius: 0,
          borderEndEndRadius: 0,
        }}
      >
        <TextInput
          ref={inputRef}
          onSubmitEditing={isLoading ? undefined : (e) => createTodo(e.nativeEvent.text)}
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
          placeholder="New todo (click to type)"
          placeholderTextColor="rgb(218, 218, 218)"
          className="py-1 px-4 flex-grow text-white fs-4 shadow-none outline-0 border-0"
        />

        <TouchableOpacity
          disabled={isInputFocused || isLoading}
          onPress={() => inputRef.current?.focus()}
          style={{
            backgroundColor: THEME.pallete.primary,
            borderEndStartRadius: 12,
            opacity: isInputFocused ? 0.5 : 1,
          }}
          className="p-2"
        >
          <MaterialIcons
            size={ICON_SIZE}
            color="white"
            name={isLoading ? "hourglass-bottom" : "add"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
