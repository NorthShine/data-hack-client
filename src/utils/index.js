import { v4 as uuid } from 'uuid';
import { DEFAULT_DATA_CLASS } from '../constants';

export * from './store';

export const createDataClass = () => ({
  ...DEFAULT_DATA_CLASS,
  id: uuid()
});
