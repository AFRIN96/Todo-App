import React from "react";
import {FaTrash } from "react-icons/fa";
const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteTodo = () => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };
  const completeTodo = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="task-list">
    <li className={`todo-list ${todo.completed ? "completed" : " "}`}>
    <input type="checkbox" onClick={completeTodo}/>
     {text} 
     <FaTrash onClick={deleteTodo} />
     </li>
    </div>
  );
};
export default Todo;
