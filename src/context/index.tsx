import React, { useReducer } from 'react';

export const TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE';

interface IAppState {
  darkMode?: boolean;
}
export interface IAction<T> {
  type: string;
  data?: T;
}
const initialState: IContext<IAppState> = {
  state: {
    darkMode: false,
  },
  dispatch: (_value: IAction<IAppState>) => null,
};
export interface IContext<T> {
  state: T;
  dispatch: React.Dispatch<IAction<T>>;
}
const AppContext = React.createContext(initialState);
const reducer = (state: IAppState, action: IAction<IAppState>): IAppState => {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return {
        ...state,
        darkMode: action.data?.darkMode,
      };
    default:
      return state;
  }
};

interface IContextProvider {
  children: React.ReactNode;
}

const ContextProvider: React.FC<IContextProvider> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState.state);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

export { AppContext, ContextProvider };
