import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Todo:" ,this.state.todo);
    alert("Task added");
  };
  render() {
    const { todo } = this.state;
    return (
      <div className="App-header">
        <form onSubmit={this.handleSubmit}>
          <label>
            Todo:
            <input
              type="text"
              name="todo"
              value={todo}
              placeholder="type in the task"
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add Task</button>
          <br />
          <span>{this.state.todo}</span>
        </form>
      </div>
    );
  }
}

export default Todo;
