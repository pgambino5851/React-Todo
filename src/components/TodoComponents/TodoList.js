// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
// import './Todo.css';
import Todo from './Todo'

const TodoList = props => {
    return(
        <div>
        {props.todos.map(todoItem => {
            // console.log(props.todos)
          return <Todo key = {todoItem.id} todoProp={todoItem} />
        }  
        )}
        </div>
    )
}

export default TodoList;