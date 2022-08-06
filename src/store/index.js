import { combineUnits } from '../utils';
import alertUnit from './units/alert';
import configUnit from './units/config';

const store = combineUnits({
  alert: alertUnit,
  config: configUnit
});

export default store;
