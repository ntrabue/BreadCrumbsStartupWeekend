import React from "react";
import ListItem from "./ListItem";
import { Grid, Container } from "@material-ui/core";
import { useAppState } from "./State";

const List = () => {
  const { data, view } = useAppState();

  const visible =
    view === "personal"
      ? data.filter(item => item.pinned)
      : data.filter(item => !item.pinned);

  return (
    <Container>
      <Grid container spacing={3}>
        {visible.map(part => (
          <Grid key={part.id} item xs={12} md={6}>
            <ListItem item={part} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default List;
