import { makeStyles } from "@material-ui/core/styles";
import Colors from "../../styles/colors";

export default makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    borderBottom: "1px solid black",
  },

  input: {
    margin: "0px 10px",
    flex: 1,
    border: "none",
    padding: "10px 12px",
    background: "none",
  },

  editButton: {
    marginRight: 10,
  },
}));
