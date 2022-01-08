import React, { useEffect } from "react";

import { Todo } from "../../../components";

import { TodoItem } from "../../../types/todo";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { getAllTodos } from "../../../service/todosService";

import { useStyles } from "./style";

const ToDoList: React.FC = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const { all } = useAppSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getAllTodos());
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <ul className={classes.listItem}>
        {all.map((todo: TodoItem) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList