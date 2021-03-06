import React from 'react'
// import Todo from './Todo'

const TodoForm = props => {
    return (
        <form>
            <input
            type="text" 
            value={props.task}
            name="task"
            placeholder="Task"
            onChange={props.updateTodo}
            />
            <button onClick={props.updateTodoArr}>Add Task</button>
        </form>
    );
};

export default TodoForm;