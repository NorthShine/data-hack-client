import React, { createContext, useReducer, useCallback } from 'react';
import PropTypes from 'proptypes';

export const StateContext = createContext({
  state: {},
  setState: () => {}
});

const StateProvider = (props) => {
  const { children, store } = props;
  const { reducer, initialState } = store;
  const [state, dispatch] = useReducer(reducer, initialState);

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
  children: PropTypes.node.isRequired,
  store: PropTypes.shape({
    initialState: PropTypes.shape(),
    reducer: PropTypes.func
  })
};

export default StateProvider;
