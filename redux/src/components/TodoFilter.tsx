import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, Filter } from "../modules/todoFilter.reducer";

export const TodoFilter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const filterValue = e.target.value as Filter;
    dispatch(changeFilter(filterValue));
  };
  return (
    <div>
      <select onChange={onChange} value={filter}>
        <option value="">all</option>
        <option value="completed">completed</option>
        <option value="uncompleted">uncompleted</option>
      </select>
    </div>
  );
};
