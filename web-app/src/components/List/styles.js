import { makeStyles } from "@material-ui/core/styles";
import Colors from "../../styles/colors";

export default makeStyles((theme) => ({
  paper: {
    background: Colors.yellow,
    padding: "20px 25px",
  },

  header: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },

  title: {
    fontSize: 32,
    flex: 1,
    marginRight: 10,
  },

  createContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  input: {
    margin: "0px 10px",
    flex: 1,
    border: "none",
    padding: "10px 12px",
    background: "none",
  },

  createButton: {
    marginRight: 10,
  },
}));
