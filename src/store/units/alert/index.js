import { CLOSE_ALERT, OPEN_ALERT } from './actionTypes';

const alertUnit = {
  initialState: {
    open: false,
    message: '',
    severity: 'info'
  },
  reducer: (state, action) => {
    switch (action.type) {
      case OPEN_ALERT:
        return {
          ...state,
          ...action.payload,
          open: true
        };
      case CLOSE_ALERT:
        return {
          ...state,
          open: false
        };
      default:
        return state;
    }
  }
};

export default alertUnit;
