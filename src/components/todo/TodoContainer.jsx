import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import React, { useState } from "react";

const TodoContainer = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "title1",
      content: "content1",
      isDone: false,
    },
  ]);

  return (
    <div>
      <TodoForm setTodos={setTodos} />
      <div>
        <TodoList />
        <TodoList />
      </div>
    </div>
  );
};

export default TodoContainer;
