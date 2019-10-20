//community / my view
/*
  if community is active show map with many pins and all unpinned results
  if my view is active show map with a couple of pins
  go back to community
  pin a new item
  go back to my view map should be updated
*/
import React, { useReducer } from "react";
import data from "./generic";

const AppState = React.createContext();
const AppReducer = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "setView": {
      let view = action.view;
      return { ...state, view };
    }
    case "toggle": {
      const updated = { ...action.item, pinned: !action.item.pinned };
      const foundIndex = state.data.findIndex(
        element => element.id === action.item.id
      );
      const newData = state.data.splice(foundIndex, 1, updated);
      return { ...state };
    }
    default: {
      return state;
    }
  }
};

const defaultState = {
  view: "community",
  data: data
};
const AppWrapper = ({ children }) => {
  const [state, setState] = useReducer(reducer, defaultState);
  return (
    <AppState.Provider value={state}>
      <AppReducer.Provider value={setState}>{children}</AppReducer.Provider>
    </AppState.Provider>
  );
};

const useAppState = () => {
  const context = React.useContext(AppState);
  if (context === undefined) {
    throw new Error("useAppState must be used within an AppWrapper");
  }
  return context;
};

const useAppReducer = () => {
  const context = React.useContext(AppReducer);
  if (context === undefined) {
    throw new Error("useAppReducer must be used within an");
  }
  return context;
};

export { AppWrapper, useAppState, useAppReducer };
