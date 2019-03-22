import React from 'react';
import './Todo.css';

const Todo = props => {
  // console.log(props.todoProp.completed);
    return (
      
    <p 
      onClick={() =>{props.updateTodoComplete(props.todoProp.id)}}
      style={props.todoProp.completed ? {textDecoration: 'line-through'} : null}
    > {props.todoProp.task} </p>
    );
   
}

export default Todo;

