import { SET_LOADING } from './actionTypes';

const loaderUnit = {
  initialState: {
    loading: false
  },
  reducer: (state, action) => {
    switch (action.type) {
      case SET_LOADING:
        return {
          ...state,
          loading: action.payload
        };
      default:
        return state;
    }
  }
};

export default loaderUnit;
