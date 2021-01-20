import React from "react";
import { useRecoilValue } from "recoil";
import { useSetCompleteTodo, useSetUncompleteTodo } from "../actions/todoActions";
import { filteredTodos, Todo } from "../stores/todo";

export const TodoList = () => {
  const todoList = useRecoilValue(filteredTodos);
  const setCompleteTodo = useSetCompleteTodo();
  const setUncompleteTodo = useSetUncompleteTodo();
  const onClick = (todo: Todo) => {
    return () => todo.completed ? setUncompleteTodo(todo.id) : setCompleteTodo(todo.id);
  };

  return (
    <div>
      {
        todoList.map((todo) => {
          return (
            <div>
              <span>{todo.title}</span>
              <button onClick={onClick(todo)}>
                {todo.completed ? 'uncomplete...' : 'complete!'}
              </button>
            </div>
          );
        })
      }
    </div>
  );
};
