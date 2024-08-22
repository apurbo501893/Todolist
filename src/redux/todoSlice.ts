import { Todo } from "@/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TodoState {
  todoList: Todo[];
}
const initialState: TodoState = {
  todoList: [],
};
export const todoSlice = createSlice({
  //name
  name: "todo",
  //initialState
  initialState,
  //reducers
  reducers: {
    //addTodo
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todoList.push(action.payload);
    },
    //deleteTodo
    deleteTodo: (state, action: PayloadAction<String>) => {
      state.todoList = state.todoList.filter(
        (item) => item?._id !== action.payload
      );
    },
    //removeTodo
    removeTodo: (state) => {
      state.todoList = [];
    },
  },
});

export const { addTodo, deleteTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
