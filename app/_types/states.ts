export type States = {
  heroInView: boolean;
  headerInView: boolean;
};

export type StateContext = {
  states: States;
  setStates: (data: States) => void;
};
