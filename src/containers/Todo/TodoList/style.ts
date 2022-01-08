import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflow: "scroll",
    overflowX: "hidden",
    width: 500,
    height: 450,
    background: "white",
    boxShadow: "0 0 10px rgba(0,0,0,0.5)",
    borderRadius: " 0 0 5px 5px",
  },
  listItem: {
    width: "98%",
    listStyle: "none",
    listStylePosition: "inside",
    padding: 0,
  },
});
