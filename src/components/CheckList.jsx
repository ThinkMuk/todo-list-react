import React from "react";
import { BsFillTrash3Fill } from "react-icons/bs";

export default function CheckList({ todo, onDelete, onUpdate }) {
  const { text, status } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status: status });
  };
  const handleDelete = () => onDelete(todo);
  return (
    <li>
      <input
        type="checkbox"
        id="checkbox"
        checked={status === "completed"} //여기서 checked는 어떤 경우에 checked되어 있어야 하는지를 물어보는것
        onChange={handleChange}
      />
      <label htmlFor="checkbox">{text}</label>
      <button onClick={handleDelete}>
        <BsFillTrash3Fill />
      </button>
    </li>
  );
}
