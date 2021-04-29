import React from "react";
import { toast } from "react-toastify";
import { Grid, Typography } from "@material-ui/core";
import List, { Create as CreateList } from "./components/List";

import api from "./services/api";

function App() {
  const [lists, setLists] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  async function getLists() {
    try {
      setLoading(true);

      const response = await api.get("/todolist");

      setLists(response.data);

      setLoading(false);
    } catch (error) {
      console.log(error);

      toast.error("Ocorreu algum erro, tente novamente mais tarde.");

      setLoading(false);
    }
  }

  function attOneList(index, data) {
    const newArrayOfLists = lists;

    lists[index] = data;

    setLists(newArrayOfLists);
  }

  function renderLists() {
    return lists.map((item, index) => (
      <Grid item xs={12} sm={6} md={4} xl={3}>
        <List
          data={item}
          att={(data) => attOneList(index, data)}
          attPage={() => getLists()}
        />
      </Grid>
    ));
  }

  function renderLoading() {
    return (
      <Grid item xs={12}>
        loading
      </Grid>
    );
  }

  function renderCreateList() {
    return (
      <Grid item xs={12} sm={6} md={4} xl={3}>
        <CreateList att={() => getLists()} />
      </Grid>
    );
  }

  React.useEffect(() => {
    getLists();
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography
          style={{ width: "100%", textAlign: "center", fontSize: 32 }}
        >
          Todo list App !!!
        </Typography>
      </Grid>

      {loading ? renderLoading() : renderLists()}

      {!loading && renderCreateList()}
    </Grid>
  );
}

export default App;
