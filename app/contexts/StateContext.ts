import { createContext } from "react";
import { StateContext, States } from "../types/states";

export default createContext<StateContext>({
  states: {
    heroInView: false,
    headerInView: false,
  },
  setStates: (data: States) => {},
});
