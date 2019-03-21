import React from 'react';
import './Todo.css';

// let todoArr = [
//     {
//         task: 'Organize Garage',
//         id: Date.now(),
//         completed: false
//     },
  
//     {
//         task: 'Bake Cookies',
//         id: Date.now(),
//         completed: false
//       }
//   ]  

const Todo = props => {
    return (
    <p> {props.todoProp.task} </p>
    );
   
}

export default Todo;