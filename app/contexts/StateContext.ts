import { createContext } from "react";
import { State, StateContext } from "../Types/States";

export default createContext<StateContext>({
  states: {
    heroInView: false,
    headerInView: false,
  },
  setStates: (data: State) => {},
});
