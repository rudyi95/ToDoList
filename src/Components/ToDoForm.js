import React, { useState } from 'react';
import { v4 as uuid } from "uuid";
import './style.css';

export default function ToDoForm({ addTodo, removeBtn, showTodo, count }) {

    const [todo, setTodo] = useState({
        id: '',
        task: '',
        completed: false,
    });
    const [value, setValue] = useState('All');

    function InputChange(e) {
        setTodo({ ...todo, task: e.target.value })
    }

    function Submit(e) {
        e.preventDefault();
        if (todo.task.trim()) {
            addTodo({ ...todo, id: uuid.v4() });
            setTodo({ ...todo, task: "" });
        }
    }

    function removeClick() {
        removeBtn(todo.id);
    }

    function changeShowCompleted() {
        showTodo();
        if (count === 0) {
            setValue('Completed')
        } else if (count === 1) {
            setValue('In process')
        } else {
            setValue('All')
        }

    }


    return (
        <>
            <form onSubmit={Submit} className="todo_input">
                <input
                    type="text"
                    placeholder="I must to do!!!"
                    id="todoInput"
                    value={todo.task}
                    onChange={InputChange}
                    maxLength="40"
                />
                <span className="add_btn">
                    <button id="todoButton" className="add_btn" type="submit">To Do</button>
                </span>
            </form>

            <button
                id="todoButton"
                className="add_btn"
                onClick={removeClick}
                type="submit"
            >
                Delete
                </button>
            <button
                id="todoButton"
                className="add_btn"
                onClick={changeShowCompleted}
                type="submit"
            >
                {value}
            </button>
        </>
    )
}