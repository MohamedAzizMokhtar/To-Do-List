import React, { useState, useEffect } from "react";
import "./index.css";

function App() {
  const [todos, Settodos] = useState([]);
  const [newtodo, Setnewtodo] = useState("");

  const addtask = (e) => {
    e.preventDefault();
    if (newtodo.trim() === "") {
      alert("Task cannot be empty");
      return;
    }
    Settodos([...todos, { text: newtodo.trim(), done: false }]);
    Setnewtodo("");
  };

  const deletetask = (index) => {
    Settodos(todos.filter((_, i) => i !== index));
  };

  const markDone = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].done = !updatedTodos[index].done;
    Settodos(updatedTodos);
  };

  return (
    <div className="container">
      <h1>ToDo List</h1>
      <form onSubmit={addtask}>
        <input
          type="text"
          placeholder="Enter task here"
          value={newtodo}
          onChange={(e) => Setnewtodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className={todo.done ? "done" : ""}>
            <span onClick={() => markDone(index)}>{todo.text}</span>
            <button onClick={() => deletetask(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
