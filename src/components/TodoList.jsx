import React, { useState } from "react";
import AddTodo from "./AddTodo";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 100, text: "공부", isChecked: "active" },
    { id: 101, text: "놀기", isChecked: "completed" },
  ]);
  const handleAdd = (todo) => {
    setTodos([...todos, todo]);
    console.log(todo);
  };
  return (
    <div>
      NavBar
      <section>
        {todos.map((e, idx) => {
          return (
            <div key={e.id}>
              <li>{e.text}</li>
            </div>
          );
        })}
        <AddTodo onAdd={handleAdd} />
      </section>
    </div>
  );
}
