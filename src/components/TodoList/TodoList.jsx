import React, { useState } from "react";
import CheckList from "../CheckList/CheckList";
import AddTodo from "../AddTodo/AddTodo";
import styles from "./TodoList.module.css";

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState([
    { id: 100, text: "공부", status: "active" },
    { id: 101, text: "놀기", status: "completed" },
  ]);
  const handleAdd = (added) => {
    setTodos([...todos, added]);
  };
  const handleUpdate = (updated) => {
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  };
  const handleDelete = (deleted) => {
    setTodos(todos.filter((t) => t.id !== deleted.id));
  };
  const filtered = getFilteredItems(todos, filter);
  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((element) => (
          <CheckList
            key={element.id}
            todo={element}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

function getFilteredItems(todos, filter) {
  if (filter === "all") {
    return todos;
  }
  return todos.filter((t) => t.status === filter);
}
