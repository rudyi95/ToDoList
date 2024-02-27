import React from "react";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { useAppDispatch } from "../../hooks/redux";
import { completeTask, removeTodo } from "../../service/todosService";
import { TodoItem } from "../../types/todo";

import classes from "./style.module.scss";

interface IProps {
  todo: TodoItem;
}

export const Todo: React.FC<IProps> = ({ todo }) => {
  const dispatch = useAppDispatch();

  const checkboxClick = () => {
    dispatch(completeTask(todo.id));
  };

  const removeClick = () => {
    dispatch(removeTodo(todo.id));
  };

  return (
    <div className={classes.root}>
      <li className={classes.row} onClick={checkboxClick}>
        <span
          style={{
            textDecoration: todo.completed ? "line-through" : undefined,
          }}
        >
          {todo.task}
        </span>
      </li>
      <IconButton style={{ width: "55px", height: "55px" }} onClick={removeClick}>
        <CloseIcon />
      </IconButton>
    </div>
  );
};
