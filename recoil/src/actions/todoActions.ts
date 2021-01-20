import { useRecoilState } from "recoil";
import { todoListState } from "../stores/todo";

export const useSetCompleteTodo = () => {
  const [v, setV] = useRecoilState(todoListState);

  return (id: number) => {
    const target = v.find((todo) => todo.id === id)!;
    const targetIndex = v.findIndex((todo) => todo.id === id)!;
    const beforeList = v.filter((_, index) => index < targetIndex);
    const afterList = v.filter((_, index) => targetIndex < index);
    setV([...beforeList, { ...target, completed: true}, ...afterList]);
  }
};

export const useSetUncompleteTodo = () => {
  const [v, setV] = useRecoilState(todoListState);

  return (id: number) => {
    const target = v.find((todo) => todo.id === id)!;
    const targetIndex = v.findIndex((todo) => todo.id === id)!;
    const beforeList = v.filter((_, index) => index < targetIndex);
    const afterList = v.filter((_, index) => targetIndex < index);
    setV([...beforeList, { ...target, completed: false}, ...afterList]);
  }
};

export const useAddTodo = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  return (title: string) => {
    setTodoList([...todoList, { id: new Date().getTime() ,title, completed: false }]);
  };
};
