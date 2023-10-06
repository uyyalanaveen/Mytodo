import React, {useState} from 'react';
import Todolist from './Todolist';
const Todo = () => {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })
    return Todo.map((todo, index) =>(
        <div className= {todo.isComplete ? 'todo-row complete': 'todo-row'} 
        key={index}>
        </div>

    ))
}

export default Todo;