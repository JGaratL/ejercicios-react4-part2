import React, { useState, useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

const TodoForm = () => {
  const [todo, setTodo] = useState('');
  const { setTodos } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((prevTodos) => [...prevTodos, todo]);
    setTodo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={todo} 
        onChange={(e) => setTodo(e.target.value)} 
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
