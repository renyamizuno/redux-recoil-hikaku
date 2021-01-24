import { createAction, createReducer, PrepareAction } from "@reduxjs/toolkit";

export type Filter = '' | 'completed' | 'uncompleted';

export const changeFilter = createAction<PrepareAction<Filter>>('todoFilter/change', (filter: Filter) => ({
  payload: filter,
}));

export const filterReducer = createReducer<Filter>('', (builder) => {
  builder
    .addCase(changeFilter, (_, { payload }) => payload)
});
