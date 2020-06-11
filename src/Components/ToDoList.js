import React from 'react';

import Todo from "./Todo";
import './style.css';

export default function ToDoList({ todos, completed, removeTodo }) {


    return (

        <div className="todo_list" todos={todos}>
            {todos ?
                <ul id="todoList">
                    {todos.map(todo => (
                        <Todo key={todo.id} todo={todo} completed={completed} removeTodo={removeTodo} />
                    ))}
                </ul> : ''}
        </div>
    )
}