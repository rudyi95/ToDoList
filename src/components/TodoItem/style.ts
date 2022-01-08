import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    background: "rgb(247,247,247)",
  },
  row: {
    width: "80%",
    fontSize: 24,
    flexWrap: "wrap",
    wordWrap: "break-word",
    marginTop: 5,
    marginBottom: 15,
  },
});
