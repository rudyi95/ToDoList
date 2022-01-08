import React from "react";
import { Todo } from "../containers";

import { useStyles } from "./style";

const MainPage: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Todo.Form />
      <Todo.List />
    </div>
  );
};

export default MainPage;
