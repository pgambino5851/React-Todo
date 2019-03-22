import React from 'react';
import './App.css';
// import Todo from './components/TodoComponents/Todo'
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList'

// let todoArr = [
//   {
//       task: 'Organize Garage',
//       id: Date.now(),
//       completed: false
//   },

//   {
//       task: 'Bake Cookies',
//       id: Date.now()+1,
//       completed: false
//     }
// ]


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    
    this.state = { 
      todoItems: [
                {
                  task: 'Organize Garage',
                  id: 1528817077286,
                  completed: false
                },
                {
                  task: 'Bake Cookies',
                  id: 1528817084358,
                  completed: false
                }
              ],
        task: ''
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
      id: Date.now(),
      completed: false
    }
    this.setState({
      todoItems: [...this.state.todoItems, newTask],
      task: ''
    })
  }

  updateTodoComplete = id => {
    let todoItems = this.state.todoItems.slice();
    todoItems = todoItems.map(todo => {
      if(todo.id === id){
        console.log(todo.completed);
        todo.completed = !todo.completed;
        console.log(todo.completed);
        return todo;
      } else {
        return todo;
      }
    })

    this.setState({ todoItems })
  }

  deleteTodoItem = event => {
    event.preventDefault();
    console.log("The current ToDo List is: " + this.state.todoItems)
    let todoItems = this.state.todoItems.filter(item => {
      console.log("The current item is: " + item);
      console.log("The completed status of the current item is: " + item.completed)
      return !item.completed //returns all items who have a completed value of false
    })

    this.setState({ todoItems });
  }

  render() {
    return (
      <div className="app-container">
        <h2>Welcome to your Todo App!</h2>
        {/* {console.log(this.state.todoItems)} */}
        <TodoList 
          todoItems={this.state.todoItems}
          updateTodoComplete={this.updateTodoComplete}
          />
        <TodoForm 
        task={this.state.task} 
        updateTodo={this.updateTodo}
        updateTodoArr={this.updateTodoArr}
        deleteTodoItem={this.deleteTodoItem}
        />
      </div>
    );
  }
}

export default App;