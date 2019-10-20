import React from "react";
import { useAppState } from "./State";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  map: {
    width: "100%",
    height: "auto",
    maxHeight: "500px",
    margin: "20px 0 35px 0"
  }
}));

const Map = () => {
  const classes = useStyles();
  const { view } = useAppState();
  const communityMap = "https://i.imgur.com/GQrsbuB.png";
  const personalMap = "https://i.imgur.com/95o0vWn.png";

  if (view === "community")
    return (
      <img src={communityMap} alt="community map" className={classes.map} />
    );
  return <img src={personalMap} alt="personalMap" className={classes.map} />;
};

export default Map;
