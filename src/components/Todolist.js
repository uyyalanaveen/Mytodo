import React, {useState} from 'react';
import TodoForms from './TodoForms';

const Todolist = () => {
    const [todos, setTodos] = useState([])
    const Addtodo = (todo) =>{
        const newTodos = [todo, ...todos];
        setTodos(newTodos)
        console.log(...todos)
    }
    return (
        <div>
            <h1>Whats your plan?</h1>
            <TodoForms onSubmit = {Addtodo}/>
        </div>
    );
};

export default Todolist;