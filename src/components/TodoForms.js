import React, {useState} from 'react';

const TodoForms = (props) => {

    const [input, setInput] = useState('')
    const handlechange = e =>{
        setInput(e.target.value)
    }
    const handlesubmit = (e) =>{
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random()* 10000),
            text: input
        })
        setInput('')
    }
    return (
        <div>
            <h1>Todo List</h1>
            <form onSubmit={handlesubmit}>
                <input type='text'
                placeholder='Enter todo'
                name='text' 
                value={input}
                className='todo-input'
                onChange={handlechange}/>

                <button className='todo-btn'>ADD Todo</button>

            </form>
        </div>
    );
};

export default TodoForms;