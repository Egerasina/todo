import React, { useState } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';

function App() {
  const todolist = []

  // const returnOfUseState = useState([])

  // const todos = returnOfUseState[0]
  // const setTodos = returnOfUseState[1]
const [todos, setTodos] = useState([])

const addNewTodo = (input) => {
  const newTodo = {
    id: crypto.randomUUID(),
    completed: false,
    input
  }

  setTodos((prev) => [newTodo, ...prev])
}

const deleteTodo = (id) => {
  setTodos((prev) => prev.filter((todo) => todo.id !== id))
}

const changeStatusTodo = (id) => {
setTodos((prev) => prev.map((todo) => {
  if (todo.id === id) {
    return {
      ...todo,
      completed: !todo.completed
    }
  }
  return todo
}))
}

const clearAllTodos = (clearAllTodos) => {
  setTodos([])
}

console.log({todos});
  return (
   
    <div className="container py-5">
      <Header addNewTodo={addNewTodo} />
      <hr />
      <Main todos={todos} deleteTodo={deleteTodo} changeStatusTodo={changeStatusTodo}/>
      <hr />
      <Footer clearAllTodos={clearAllTodos}/>
    </div>
    
  );
}

export default App;
