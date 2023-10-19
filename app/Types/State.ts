export interface State {
  heroInView: boolean;
  headerInView: boolean;
}

export interface StateContext {
  states: State;
  setStates: (data: State) => void;
}
