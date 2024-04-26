import { createContext, useReducer } from 'react';
import counterReducer from '../reducers/counterReducer';

export const CounterContext = createContext({
  state: 0,
  dispatch: () => {},
});

export function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(counterReducer, 0);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
}
