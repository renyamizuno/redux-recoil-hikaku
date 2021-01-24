import { configureStore } from "@reduxjs/toolkit";
import { Filter, filterReducer } from "./modules/todoFilter.reducer";
import { Todo, todoListReducer } from "./modules/todoList.reducer";

type StoreState = {
  todoList: Todo[];
  filter: Filter;
};

declare module 'react-redux' {
  interface DefaultRootState extends StoreState {}
};

const reducer = {
  todoList: todoListReducer,
  filter: filterReducer,
};

export const store = configureStore(
  {
    reducer
  }
);
