import React from "react";
import { ButtonGroup, Button } from "@material-ui/core";
import { useAppReducer, useAppState } from "./State";
import { Explore, Person } from "@material-ui/icons";

const ToggleView = () => {
  const { view } = useAppState();
  const dispatch = useAppReducer();

  return (
    <ButtonGroup>
      <Button
        color={view === "community" && "primary"}
        variant="contained"
        onClick={() => dispatch({ type: "setView", view: "community" })}
      >
        <Explore />
      </Button>
      <Button
        color={view === "personal" && "primary"}
        variant="contained"
        onClick={() => dispatch({ type: "setView", view: "personal" })}
      >
        <Person />
      </Button>
    </ButtonGroup>
  );
};

export default ToggleView;
