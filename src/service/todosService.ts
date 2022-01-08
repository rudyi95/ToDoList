import { todosSlice } from "../redux/reducers/todo";
import { AppDispatch } from "../redux/store";
import { TodoItem } from "../types/todo";
import storageService from "./storageService";

export const getAllTodos = () => (dispatch: AppDispatch) => {
  const lsTodos = storageService.get<TodoItem[]>("todo");
  if (lsTodos) {
    dispatch(todosSlice.actions.getAll(lsTodos));
  } else {
    dispatch(todosSlice.actions.getAll([]));
  }
};

export const addTodo = (item: TodoItem) => (dispatch: AppDispatch) => {
  const lsTodos = storageService.get<TodoItem[]>("todo");
  if (lsTodos) {
    storageService.set("todo", [item, ...lsTodos]);
    dispatch(todosSlice.actions.getAll([item, ...lsTodos]));
  } else {
    storageService.set("todo", [item]);
    dispatch(todosSlice.actions.getAll([item]));
  }
};

export const completeTask = (id: string) => (dispatch: AppDispatch) => {
  const lsTodos = storageService.get<TodoItem[]>("todo");
  if (lsTodos) {
    let itemIndex = lsTodos.findIndex((item) => item.id === id);
    lsTodos[itemIndex].completed = true;
    storageService.set("todo", lsTodos);
    dispatch(todosSlice.actions.getAll(lsTodos));
  }
};

export const removeTodo = (id: string) => (dispatch: AppDispatch) => {
  const lsTodos = storageService.get<TodoItem[]>("todo");
  if (lsTodos) {
    const newArr = lsTodos.filter((item) => item.id !== id);
    storageService.set("todo", newArr);
    dispatch(todosSlice.actions.getAll(newArr));
  }
};

export const removeAll = () => (dispatch: AppDispatch) => {
  storageService.set("todo", []);
  dispatch(todosSlice.actions.getAll([]));
};

export const filterTodos = (type: string) => (dispatch: AppDispatch) => {
  const lsTodos = storageService.get<TodoItem[]>("todo");
  if (lsTodos) {
    switch (type) {
      case "Completed":
        const completed = lsTodos.filter((todo: TodoItem) => todo.completed === true);
        dispatch(todosSlice.actions.getAll(completed));
        break;
      case "In progress":
        const inProggress = lsTodos.filter((todo: TodoItem) => todo.completed === false);
        dispatch(todosSlice.actions.getAll(inProggress));
        break;
      default:
        dispatch(todosSlice.actions.getAll(lsTodos));
        break;
    }
  }
};
