import "./App.css";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoForm from "./TodoComps/TodoForm";
import TodoList from "./TodoComps/TodoList";
import Menubar from './components/SidebarComp/Menubar';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [statusView, setStatusView] = useState("all");
  const [filterTodos, setFilterTodos] = useState([]);
  useEffect(() => {
    filterHandleChange();
  }, [todos, statusView]);

  const filterHandleChange = () => {
    switch (statusView) {
      case "pending":
        setFilterTodos(todos.filter((todo) => todo.completed === false));
      
        break;
      case "completed":
        setFilterTodos(todos.filter((todo) => todo.completed === true));
       
        break;
      default:
        setFilterTodos(todos);
        
        break;
    }
  };
  return ( 
    <div className="App">
      <header>
      <Menubar />
      </header>
      <div className="Heading">
      <h1>React-Todoapp</h1>
      <TodoForm
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        inputText={inputText}
        setStatusView={setStatusView}
      />
     
      <TodoList filterTodos={filterTodos} setTodos={setTodos} todos={todos} />
    </div>
    </div>
  );
}
export default App;
