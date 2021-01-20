import { atom, selector } from 'recoil';

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export type Filter = '' | 'completed' | 'uncompleted';

export const todoListState = atom<Array<Todo>>({
  key: 'todosState',
  default: [],
});

export const filterState = atom<Filter>({
  key: 'filterState',
  default: '',
});

export const filteredTodos = selector({
  key: 'filteredTodos',
  get: ({ get }) => {
    const filter = get(filterState);
    const todoList = get(todoListState);

    switch(filter) {
      case 'completed':
        return todoList.filter((todo) => todo.completed);
      case 'uncompleted':
        return todoList.filter((todo) => !todo.completed);
      case '':
        return todoList;
    }
  },
})
