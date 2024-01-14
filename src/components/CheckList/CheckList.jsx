import React from "react";
import { BsFillTrash3Fill } from "react-icons/bs";
import styles from "./CheckList.module.css";

export default function CheckList({ todo, onDelete, onUpdate }) {
  const { text, status } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status: status });
  };
  const handleDelete = () => onDelete(todo);
  return (
    <li className={styles.checklist}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id={todo.id}
        checked={status === "completed"}
        onChange={handleChange}
      />
      <label htmlFor={todo.id} className={styles.text}>
        {text}
      </label>
      <span className={styles.icon}>
        <button onClick={handleDelete} className={styles.button}>
          <BsFillTrash3Fill />
        </button>
      </span>
    </li>
  );
}
