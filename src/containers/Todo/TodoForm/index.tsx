import React, { BaseSyntheticEvent, useState } from "react";
import { v4 } from "uuid";

import { Button } from "../../../components";

import { useAppDispatch } from "../../../hooks/redux";
import { addTodo, filterTodos, removeAll } from "../../../service/todosService";

import { useStyles } from "./style";

const ToDoForm: React.FC = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  const handleChange = (e: BaseSyntheticEvent) => {
    setTodo({ ...todo, task: e.target.value });
  };

  const handleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    if (todo.task.trim()) {
      dispatch(addTodo({ ...todo, id: v4() }));
      setTodo({ ...todo, task: "" });
    }
  };

  const removeHandler = () => {
    dispatch(removeAll());
  };

  const filterHandler = (e: BaseSyntheticEvent) => {
    dispatch(filterTodos(e.currentTarget.value));
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={classes.root}>
        <input
          placeholder="I must to do!!!"
          className={classes.todoInput}
          value={todo.task}
          onChange={handleChange}
          maxLength={40}
        />
        <span className={classes.addBtn}>
          <Button.Custom className={classes.todoBtn} text="To Do" type="submit" />
        </span>
      </form>
      <Button.Custom className={classes.todoBtn} onClick={removeHandler} text="Clear all" />
      <div className={classes.btnGroup}>
        <Button.Custom className={classes.todoBtn} onClick={filterHandler} text="All" />
        <Button.Custom className={classes.todoBtn} onClick={filterHandler} text="Completed" />
        <Button.Custom className={classes.todoBtn} onClick={filterHandler} text="In progress" />
      </div>
    </>
  );
};

export default ToDoForm