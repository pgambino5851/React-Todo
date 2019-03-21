import React from 'react';
import './App.css';
import Todo from './components/TodoComponents/Todo'
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList'

let todoArr = [
  {
      task: 'Organize Garage',
      id: Date.now(),
      completed: false
  },

  {
      task: 'Bake Cookies',
      id: Date.now()+1,
      completed: false
    }
]

// class TodoApp extends React.Component {
//   constructor() {
//     super();
//     //state === data (What our data looks like at any given point, or what is the state of my data right now)
//     this.state = { //this.state object, or the brain of the component tree
//       todoItems: todoArr,
//     }
//   }
// }


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    
    this.state = { 
      todoItems: todoArr,
      task: '',
      id: Date.now,
      completed: false,
    }
  }

  updateTodo = event => {
    console.log('event:', event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
      
    })
  }

  updateTodoArr = event => {

    console.log("updateTodoArr fired")
    event.preventDefault();
    const newTask ={
      task: this.state.task,
      id: Date.now,
      completed: false
    }
    this.setState({
      todoItems: [...this.state.todoItems, newTask]
    })
  }

  render() {
    return (
      <div className="app-container">
        <h2>Welcome to your Todo App!</h2>
        {/* {console.log(this.state.todoItems)} */}
        <TodoList todos={this.state.todoItems} />
        <TodoForm 
        task={this.state.task} 
        updateTodo={this.updateTodo}
        completed={this.completed}
        updateTodoArr={this.updateTodoArr}
        />
      </div>
    );
  }
}

export default App;
