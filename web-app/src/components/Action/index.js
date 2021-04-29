import React from "react";
import { Checkbox, IconButton } from "@material-ui/core";
import { DeleteOutlineOutlined, EditOutlined } from "@material-ui/icons";

import useStyles from "./styles";

export const Create = ({ create, disabled = false }) => {
  const classes = useStyles();
  const [name, setName] = React.useState("");

  return (
    <div className={classes.container} style={{ border: "none" }}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={classes.input}
        placeholder="Add Action"
      />

      <IconButton
        className={classes.editButton}
        disabled={name === "" || disabled}
        onClick={() => {
          create(name);
          setName("");
        }}
      >
        <EditOutlined />
      </IconButton>
    </div>
  );
};

function Action({
  data = { name: "", done: false },
  att,
  remove,
  disabled = false,
}) {
  const classes = useStyles();
  const [name, setName] = React.useState(data.name);

  return (
    <div className={classes.container}>
      <Checkbox
        checked={data.done}
        onChange={(e) => att({ ...data, done: e.target.checked })}
        name="checkedB"
        color="primary"
        disabled={disabled}
      />
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={classes.input}
        disabled={disabled}
      />
      {name !== data.name && (
        <IconButton className={classes.editButton} disabled={disabled}>
          <EditOutlined />
        </IconButton>
      )}

      <IconButton
        className={classes.editButton}
        onClick={() => remove()}
        disabled={disabled}
      >
        <DeleteOutlineOutlined />
      </IconButton>
    </div>
  );
}

export default Action;
