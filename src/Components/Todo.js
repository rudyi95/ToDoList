import React from 'react';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

export default function Todo({ todo, completed, removeTodo }) {

    function checkboxClick() {
        completed(todo.id);
    }

    function removeClick() {

        removeTodo(todo.id);
    }

    return (

        <div className="list_row_container">
            <li className="list_row" onClick={checkboxClick}>
                <span variant="body1" style={{ textDecoration: todo.completed ? "line-through" : null }}>
                    {todo.task}
                </span>
            </li>
            <IconButton style={{ width: "55px", height: "55px" }} onClick={removeClick}><CloseIcon /></IconButton>
        </div>
    )
}