import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoItem } from "../../types/todo";

export const initialState = {
 all: [] as TodoItem[],
 todo: [] as TodoItem[],
 completed: [] as TodoItem[]
};

export const todosSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
      getAll: (state, action: PayloadAction<TodoItem[]>) => {
          state.all = action.payload
      },
      getAllInProggress: (state, action: PayloadAction<TodoItem[]>) => {
          state.todo = action.payload
      },
      getAllCompleted: (state, action: PayloadAction<TodoItem[]>) => {
          state.completed = action.payload
      }
  },
});

export default todosSlice.reducer;
