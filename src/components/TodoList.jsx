import React, { useState } from "react";
import AddTodo from "./AddTodo";
import CheckList from "./CheckList";

export default function TodoList() {
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
  // 리스트들은 이름이 아닌 아이디로 찾는구나...
  return (
    <div>
      NavBar
      <section>
        {todos.map((element) => {
          return (
            <CheckList
              key={element.id}
              todo={element}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          );
        })}
        <AddTodo onAdd={handleAdd} />
      </section>
    </div>
  );
}
