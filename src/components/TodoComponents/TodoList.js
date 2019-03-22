// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';

import Todo from './Todo';

const TodoList = props => {
  return(
      <div>
      {props.todoItems.map(todoItem => {
          // console.log(props.todos)
        return (
        <Todo 
          key = {todoItem.id} 
          todoProp={todoItem}
          updateTodoComplete = {props.updateTodoComplete} />
        )}  
      )}
      </div>
  )
}
export default TodoList;