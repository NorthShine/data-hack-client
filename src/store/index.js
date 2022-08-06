import { combineUnits } from '../utils';
import alertUnit from './units/alert';

const store = combineUnits({
  alert: alertUnit
});

export default store;
