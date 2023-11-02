import React from "react";
import TodoForm from "./todoform";
import TodoItem from "./todoitem";
import { useSelector } from "react-redux";
function TodoList() {
  const { todos } = useSelector((state) => state.todoreducer);
  return (
    <div>
      <h2>Todo List</h2>
      <ul className="list-group">
        <TodoForm />
        {todos.map((todo) => (
          <TodoItem todo={todo} />
        ))}
      </ul>
    </div>
  );
}
export default TodoList;