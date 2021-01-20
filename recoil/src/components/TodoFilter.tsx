import React from "react";
import { useRecoilState } from "recoil";
import { filterState, Filter } from "../stores/todo";

export const TodoFilter = () => {
  const [filter, setFilter] = useRecoilState(filterState);
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const filterValue = e.target.value as Filter;
    setFilter(filterValue);
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
