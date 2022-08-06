import { v4 as uuid } from 'uuid';
import { DEFAULT_DATA_CLASS } from '../constants';

export * from './store';

export const createDataClass = () => ({
  ...DEFAULT_DATA_CLASS,
  id: uuid()
});

export const createField = () => (
  {
    name: '',
    type: 'int',
    id: uuid()
  }
);

export const downloadFile = (data, fileName = 'data') => {
  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const href = URL.createObjectURL(blob);

  // create "a" HTLM element with href to file
  const link = document.createElement('a');
  link.href = href;
  link.download = `${fileName}.json`;
  document.body.appendChild(link);
  link.click();

  // clean up "a" element & remove ObjectURL
  document.body.removeChild(link);
  URL.revokeObjectURL(href);
};
