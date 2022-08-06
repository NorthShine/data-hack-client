import { CLOSE_ALERT, OPEN_ALERT } from './actionTypes';

export const openAlert = (payload) => ({
  type: OPEN_ALERT,
  payload
});

export const closeAlert = () => ({
  type: CLOSE_ALERT
});
