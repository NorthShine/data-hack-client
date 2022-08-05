import React, { createContext, useReducer, useCallback } from 'react';
import PropTypes from 'proptypes';

export const StateContext = createContext({
  state: {},
  setState: () => {}
});

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

const StateProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { children } = props;

  const setState = useCallback(
    ({ type, payload }) => dispatch({ type, payload }),
    []
  );

  const context = {
    state,
    setState
  };

  return (
    <StateContext.Provider value={context}>
      {children}
    </StateContext.Provider>
  );
};

StateProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default StateProvider;
