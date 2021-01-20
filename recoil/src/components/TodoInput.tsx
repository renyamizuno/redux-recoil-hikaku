import React, { useState } from "react";
import { useAddTodo } from "../actions/todoActions";

export const TodoInput = () => {
  const addTodo = useAddTodo();
  const [value, setValue] = useState('');
  const onClick = () => {
    addTodo(value);
    setValue('');
  };
  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={onClick}>ADD</button>
    </div>
  );
};
