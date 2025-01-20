import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { type Todo as TodoType } from "../types";
import { MaterialIcons } from "@expo/vector-icons";
import { ICON_SIZE, THEME } from "../constants";
import useUpdateTodo from "../hooks/useUpdateTodo";
import useDeleteTodo from "../hooks/useDeleteTodo";
import React, { useRef, useState } from "react";
import CustomModal from "./CustomModal";

type propTypes = {
  todo: TodoType;
  todos: TodoType[];
  reloadTodos: () => void;
};

export default function Todo({ todo, todos, reloadTodos }: propTypes) {
  const { isLoading: isUpdating, updateTodo } = useUpdateTodo(todos, reloadTodos);
  const { isLoading: isDeleting, deleteTodo } = useDeleteTodo(todos, reloadTodos);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const modalInputRef = useRef<TextInput | null>(null);

  return (
    <View className="mb-3">
      <View
        style={{ borderRadius: 5, backgroundColor: THEME.pallete.dark[200] }}
        className="px-3 py-2 flex shadow-md flex-row justify-between items-start gap-3"
      >
        <Text className="flex-grow flex-shrink text-white pr-3">{todo.content}</Text>

        <TouchableOpacity disabled={isUpdating || isDeleting} onPress={() => deleteTodo(todo.id)}>
          <MaterialIcons
            name="delete-outline"
            color={THEME.pallete.danger}
            size={ICON_SIZE / 1.4}
            style={{ opacity: isUpdating || isDeleting ? 0.5 : 1 }}
          />
        </TouchableOpacity>

        {!todo.done && (
          <>
            <CustomModal
              onShow={() => modalInputRef.current?.focus()}
              isOpen={isEditModalOpen}
              closeModal={() => setIsEditModalOpen(false)}
            >
              <View
                className="flex-1 items-center justify-center"
                style={{ width: "100%", height: "100%" }}
              >
                <View className=" w-11/12 px-5 pb-8 pt-1 border bg-[rgb(60,60,60)] shadow-xl rounded-2xl">
                  <View className="flex flex-row justify-end ">
                    <TouchableOpacity
                      disabled={isUpdating}
                      onPress={() => setIsEditModalOpen(false)}
                    >
                      <MaterialIcons
                        className="p-3"
                        name="close"
                        color={THEME.pallete.danger}
                        size={ICON_SIZE / 1.4}
                        style={{ opacity: isUpdating ? 0.5 : 1 }}
                      />
                    </TouchableOpacity>
                  </View>

                  <Text className="text-center text-white mb-5 ">Edit todo</Text>

                  <TextInput
                    ref={modalInputRef}
                    onSubmitEditing={
                      isUpdating
                        ? undefined
                        : (e) => {
                            updateTodo({ ...todo, content: e.nativeEvent.text });
                            setIsEditModalOpen(false);
                          }
                    }
                    defaultValue={todo.content}
                    className="p-3 flex-grow border-b border-white text-white fs-4 shadow-none outline-0 "
                    style={{ backgroundColor: THEME.pallete.dark[100] }}
                  />
                </View>
              </View>
            </CustomModal>

            <TouchableOpacity
              disabled={isUpdating || isDeleting}
              onPress={() => setIsEditModalOpen(true)}
            >
              <MaterialIcons
                name="edit"
                color={THEME.pallete.primary}
                size={ICON_SIZE / 1.4}
                style={{ opacity: isUpdating || isDeleting ? 0.5 : 1 }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              disabled={isUpdating || isDeleting}
              onPress={() => updateTodo({ ...todo, done: true })}
            >
              <MaterialIcons
                name="check-circle-outline"
                color={THEME.pallete.success}
                size={ICON_SIZE / 1.4}
                style={{ opacity: isUpdating || isDeleting ? 0.5 : 1 }}
              />
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
}
