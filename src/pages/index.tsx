import React from "react";
import { Todo } from "../containers";

import classes from "./styles.module.scss";

const MainPage: React.FC = () => (
  <div className={classes.root}>
    <Todo.Form />
    <Todo.List />
  </div>
);

export default MainPage;
