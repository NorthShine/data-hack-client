import { combineUnits } from '../utils';
import alertUnit from './units/alert';
import configUnit from './units/config';
import loaderUnit from './units/loader';

const store = combineUnits({
  alert: alertUnit,
  config: configUnit,
  loader: loaderUnit
});

export default store;
