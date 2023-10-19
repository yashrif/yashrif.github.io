import { createContext } from "react";
import { State, StateContext } from "../Types/State";

export default createContext<StateContext>({
  states: {
    heroInView: false,
    headerInView: false,
  },
  setStates: (data: State) => {},
});
