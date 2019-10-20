import React from "react";
import { ButtonGroup, Button } from "@material-ui/core";
import { useAppReducer, useAppState } from "./State";
import { Explore, Person } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  buttonGroup: {
    margin: "20px"
  },
  buttonIcon: {
    marginRight: "15px"
  }
}));

const ToggleView = () => {
  const classes = useStyles();
  const { view } = useAppState();
  const dispatch = useAppReducer();

  return (
    <ButtonGroup className={classes.buttonGroup}>
      <Button
        color={view === "community" && "primary"}
        variant="contained"
        onClick={() => dispatch({ type: "setView", view: "community" })}
      >
        <Explore className={classes.buttonIcon} />
        Community
      </Button>
      <Button
        color={view === "personal" && "primary"}
        variant="contained"
        onClick={() => dispatch({ type: "setView", view: "personal" })}
      >
        <Person className={classes.buttonIcon} />
        My Pins
      </Button>
    </ButtonGroup>
  );
};

export default ToggleView;
