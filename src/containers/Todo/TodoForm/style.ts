import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-around",
    width: 500,
    height: 100,
    background: "rgb(134,168,231)",
    boxShadow: "0 0 10px rgba(0,0,0,0.5)",
    borderBottom: "2px gray solid",
    borderRadius: "6px 6px 0px 0px",
    overflow: "hidden",
  },
  todoInput: {
    width: "70%",
    textAlign: "center",
    overflowWrap: "break-word",
    outline: "none",
  },
  addBtn: {
    display: "flex",
    justifyContent: "center",
    width: "30%",
  },
  todoBtn: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    width: "100%",
    boxShadow: "0 0 10px  rgba(0,0,0,0.5)",
    display: "inline-block",
    color: "white",
    textDecoration: "none",
    padding: ".5em 2em",
    outline: "none",
    borderWidth: "2px 0",
    borderStyle: "solid none",
    borderColor: "#FDBE33 #000 #D77206",
    borderRadius: "0px 6px 0px 0px",
    background: "linear-gradient(#F3AE0F, #E38916) #E38916",
    transition: "0.2s",

    "&:hover": {
      background: "linear-gradient(#f5ae00, #f59500) #f5ae00",
    },
  },
  btnGroup: {
    display: "flex",
  },
});
