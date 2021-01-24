import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../modules/todoList.reducer";

export const TodoInput = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const onClick = () => {
    dispatch(addTodo(value));
    setValue('');
  };
  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={onClick}>ADD</button>
    </div>
  );
};
