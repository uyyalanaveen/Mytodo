import React, { useState } from 'react';
import TodoForms from './TodoForms';
import Todo from './Todo';

const Todolist = () => {
  const [todos, setTodos] = useState([]);

  const Addtodo = (todo) => {
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>What's your plan?</h1>
      <TodoForms onSubmit={Addtodo} />
      <Todo todos={todos} completeTodo={completeTodo} />
    </div>
  );
};

export default Todolist;
