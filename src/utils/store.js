export const combineUnits = (units) => {
  const unitKeys = Object.keys(units);

  const initialState = unitKeys.reduce((acc, key) => {
    acc[key] = units[key]?.initialState ?? {};
    return acc;
  }, {});

  return {
    initialState,
    reducer: (state, action) => {
      unitKeys.forEach((key) => {
        const { reducer } = units[key];
        const unitState = state[key];
        const newState = reducer(unitState, action);
        Object.assign(unitState, newState);
      });
      return { ...state };
    }
  };
};
