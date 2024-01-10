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
        id={todo.id}
        checked={status === "completed"}
        onChange={handleChange}
      />
      <label htmlFor={todo.id}>{text}</label>
      <button onClick={handleDelete}>
        <BsFillTrash3Fill />
      </button>
    </li>
  );
}