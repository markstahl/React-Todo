import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';

class App extends React.Component {

  constructor() {
    super();
    this.state= {
      todolist: [
        {
          task: "Throw A Party",
          id: 1,
          completed: false
        },
        {
            task: "Throw Another Party",
            id: 2,
            completed: false
          },
          {
            task: "Feed the Kitties",
            id: 3,
            completed: false
          },
          {
            task: "Stare at Code",
            id: 4,
            completed: false
          },
          {
            task: "Do CSS for 4 Hours",
            id: 5,
            completed: false
          },
          {
            task: "Clean Room",
            id: 6,
            completed: false
          },
          {
            task: "Organize Sword Collection",
            id: 7,
            completed: false
          },
          {
            task: "Watch 11 Seasons of X-Files",
            id: 8,
            completed: false
          },
      ],
      todos: ''
    };
  }


  addTodo = event => {
    event.preventDefault();
    const newTodo = {task: this.state.todos, completed: false, id: Date.now()};
    this.setState({
      todolist: [...this.state.todolist, newTodo],
      todos: ''
    });
  }

  changeTodo = event => this.setState({[event.target.name]: event.target.value});

  toggleTodoComplete = id => {
    let todolist = this.state.todolist.slice();
    todolist = todolist.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      }
      else {
        return todo;
      }
    });
    this.setState({todolist});
  };

  clearCompletedTodolist = event => {
    event.preventDefault();
    let todolist = this.state.todolist.filter(todo => !todo.completed);
    this.setState({todolist});
  };

  render() {
    return (
      <div>
        <h1 className="header">My To Do List</h1>
        <TodoList
          handleToggleComplete={this.toggleTodoComplete}
          todolist={this.state.todolist}
        />

        <TodoForm
          value={this.state.todos}
          handleTodoChange={this.changeTodo}
          handleAddTodo={this.addTodo}
          handleClearTodolist={this.clearCompletedTodolist}
        />
      </div>
    );
  }
}

export default App;
