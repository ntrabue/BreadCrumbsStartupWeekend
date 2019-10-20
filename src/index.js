import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import List from "./List";
import Map from "./Map";

import "./styles.css";
import { AppWrapper } from "./State";
import ToggleView from "./Toggle";
import { Container } from "@material-ui/core";

function App() {
  return (
    <AppWrapper>
      <div className="App">
        <Header />
        <Container>
          <Map />
        </Container>

        <ToggleView />
        <List />
      </div>
    </AppWrapper>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
