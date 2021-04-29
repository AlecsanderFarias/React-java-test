import React from "react";
import {
  Paper,
  Typography,
  IconButton,
  Grid,
  CircularProgress,
} from "@material-ui/core";
import { DeleteOutlineOutlined, AddOutlined } from "@material-ui/icons";
import { toast } from "react-toastify";

import useStyles from "./styles";
import api from "../../services/api";

import Action, { Create as CreateAction } from "../Action";

export const Create = ({ att }) => {
  const classes = useStyles();
  const [name, setName] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  async function createList() {
    try {
      setLoading(true);

      await api.post("/todolist", {
        name,
        actions: [],
      });

      toast.success("Lista criada com sucesso.");

      setName("");

      att();

      setLoading(false);
    } catch (error) {
      toast.error("Ocorreu algum erro, tente novamente mais tarde.");

      setLoading(false);
    }
  }

  return (
    <Paper className={classes.paper}>
      <div className={classes.createContainer}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={classes.input}
          placeholder="Nova lista"
        />
        <IconButton
          className={classes.createButton}
          disabled={name === "" || loading}
          onClick={() => createList()}
        >
          {loading ? (
            <CircularProgress size={20} color="black" />
          ) : (
            <AddOutlined />
          )}
        </IconButton>
      </div>
    </Paper>
  );
};

function List({ data = { name: "", actions: [], id: 1 }, att, attPage }) {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);

  async function attList(newData) {
    try {
      setLoading(true);

      const response = await api.put(`/todolist/${data.id}`, newData);

      att(response.data);

      toast.success("Lista atualizada com sucesso.");

      setLoading(false);
    } catch (error) {
      toast.error("Ocorreu algum erro, tente novmente mais tarde.");

      setLoading(false);
    }
  }

  async function attAction(index, data) {
    const listAtt = data;
    listAtt.actions[index] = data;

    attList(listAtt);
  }

  async function removeAction(index) {
    const listAtt = data;
    listAtt.actions.splice(index, 1);

    attList(listAtt);
  }

  function renderActions() {
    return data.actions.map((item, index) => (
      <Grid item xs={12}>
        <Action
          data={item}
          att={(e) => attAction(index, e)}
          remove={() => removeAction(index)}
          disabled={loading}
        />
      </Grid>
    ));
  }

  function createAction(name) {
    const listAtt = data;
    listAtt.actions.push({
      name,
      done: false,
    });

    attList(listAtt);
  }

  async function deleteList() {
    try {
      setLoading(true);

      await api.delete(`/todolist/${data.id}`);

      attPage();

      toast.success("Lista removida com sucesso.");

      setLoading(false);
    } catch (error) {
      toast.error("Ocorreu algum erro, tente novmente mais tarde.");

      setLoading(false);
    }
  }

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className={classes.header}>
            <Typography className={classes.title}>{data.name}</Typography>
            <IconButton disabled={loading} onClick={() => deleteList()}>
              {loading ? (
                <CircularProgress size={20} color="black" />
              ) : (
                <DeleteOutlineOutlined />
              )}
            </IconButton>
          </div>
        </Grid>

        {renderActions()}

        <Grid item xs={12}>
          <CreateAction create={(e) => createAction(e)} disabled={loading} />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default List;
