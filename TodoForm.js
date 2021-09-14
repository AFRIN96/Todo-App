import React from "react";

function TodoForm({ setInputText, todos, setTodos, inputText, setStatusView }) {
  const handleInputChange = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };
  const submitTodo = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };
  // const handleStatusChange = (e) => {
  //   setStatusView("pending")
  //   setStatusView("completed")
  //   setStatusView("all")
  // };
  return (
    <div>
      <form>
        <input className="forms-control" type="text" onChange={handleInputChange} value={inputText} placeholder="Add new. ."/>
        <button className="button-add" onClick={submitTodo}>
          Add
        </button>
      </form>
      <hr />
      <div>
        <ul className="todo-list">
          <li
            onClick={(e) => setStatusView("all")}
            value="all"
            
          >
            All
          </li>
          <li onClick={(e) => setStatusView("pending")} value="pending">
            Pending
          </li>
          <li onClick={(e) => setStatusView("completed")} value="completed">
            Completed
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TodoForm;
