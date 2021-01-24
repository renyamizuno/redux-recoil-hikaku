import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { completeTodo, uncompleteTodo, Todo } from "../modules/todoList.reducer";

export const TodoList = () => {
  const dispatch = useDispatch();
  const todoList = useSelector(state => state.todoList);
  const filter = useSelector(state => state.filter);
  const onClick = (todo: Todo) => {
    return () => dispatch(todo.completed ? uncompleteTodo(todo.id) : completeTodo(todo.id));
  };

  let filteredTodoList = todoList;

  switch(filter) {
    case 'completed':
      filteredTodoList = todoList.filter(todo => todo.completed);
      break;
    case 'uncompleted':
      filteredTodoList = todoList.filter(todo => !todo.completed);
      break;
    default:
      filteredTodoList = todoList;
      break;
  }

  return (
    <div>
      {
        filteredTodoList.map((todo) => {
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
