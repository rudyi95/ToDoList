import React, { useState, useEffect } from 'react';
import './App.css';
import ToDoForm from './Components/ToDoForm';
import ToDoList from './Components/ToDoList';

const LOCAL_STORAGE_KEY = "todo";

function App() {
  const [todos, setTodos] = useState([]);
  let [count, setCount] = useState(0);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function addTodo(todo) {
    setTodos([todo, ...todos])
  }

  function completed(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      })
    )
  }

  function removeBtn() {
    setTodos(todos.filter(todo => (todo.completed === false)))
  }

  function removeTodo(id) {
    let count = todos.filter(todo => {
      return todo.id !== id
    });
    setTodos(count)
  }

  const filteredTodo = () => {
    const filtered = todos.filter(todo => (todo.completed === true));
    const filteredFalse = todos.filter(todo => (todo.completed === false));


    if (count === 0) {
      return (<ToDoList todos={todos} completed={completed} removeTodo={removeTodo} />)
    } else if (count === 1) {
      return (<ToDoList todos={filtered} completed={completed} removeTodo={removeTodo} />)
    } else {
      return (<ToDoList todos={filteredFalse} completed={completed} removeTodo={removeTodo} />)
    }

  }
  function handleShowTodo() {
    return (count < 2) ? setCount(++count) : setCount(0)
  }

  return (
    <div className="App">
      <div className="container_todo">
        <div className="todo">
          <ToDoForm removeBtn={removeBtn} addTodo={addTodo} showTodo={handleShowTodo} count={count} />
          {filteredTodo()}
        </div>
      </div>
    </div>
  );
}

export default App;
