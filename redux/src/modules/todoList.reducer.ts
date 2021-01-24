import { createAction, createReducer, PrepareAction } from "@reduxjs/toolkit";

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export const addTodo = createAction<PrepareAction<Todo>>('todolist/add', (title: string) => ({
  payload: {
    title,
    id: new Date().getTime(),
    completed: false,
  },
}));

export const completeTodo = createAction<PrepareAction<number>>('todolist/complete', (id: number) => ({
  payload: id
}));

export const uncompleteTodo = createAction<PrepareAction<number>>('todolist/uncomplete', (id: number) => ({
  payload: id
}));

export const todoListReducer = createReducer<Array<Todo>>([], (builder) => {
  builder
    .addCase(addTodo, (state, { payload }) => {
      state.push(payload);
    })
    .addCase(completeTodo, (state, { payload: id }) => {
      const todo = state.find((todo) => todo.id === id)!;
      todo.completed = true;
    })
    .addCase(uncompleteTodo, (state, { payload: id }) => {
      const todo = state.find((todo) => todo.id === id)!;
      todo.completed = false;
    });
});
