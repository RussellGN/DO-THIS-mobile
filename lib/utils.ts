import { Filter, FilterKeys, Todo } from "./types";

export function generateId() {
  return Math.random().toString(36).slice(2, 9);
}

export function filterTodos(todos: Todo[], filter: Filter) {
  return todos.filter((todo) => {
    let inc = true;
    const filterBy = (key: FilterKeys) => Object.keys(filter).includes(key);

    if (filterBy("done")) inc = inc && todo.done === filter.done;
    if (filterBy("query"))
      inc = inc && todo.content.toLowerCase().includes(filter.query!.toLowerCase());
    if (filterBy("startDate")) inc = inc && new Date(todo.date) >= new Date(filter.startDate!);
    if (filterBy("endDate")) inc = inc && new Date(todo.date) <= new Date(filter.endDate!);

    return inc;
  });
}
