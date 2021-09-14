import React from "react";
import Todo from "./Todo";
function TodoList({ todos, setTodos , filterTodos}) {
  return (
    <div>
      <ul>
        {filterTodos.map((todo) => (
          <Todo
            todos={todos}
            setTodos={setTodos}
            todo={todo}
            key={todo.id}
            text={todo.text}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
