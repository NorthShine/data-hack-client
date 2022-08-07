import { v4 as uuid } from 'uuid';

export * from './store';

export const createField = () => (
  {
    name: 'name',
    type: 'int',
    id: uuid()
  }
);

export const createForeignKey = (foreignField) => (
  {
    field: 'name',
    foreignField,
    id: uuid()
  }
);

export const DEFAULT_DATA_CLASS = {
  name: 'MyDataclass',
  limit: 10,
  lang: 'en',
  sqlModel:
  {
    fields: [createField()],
    foreignKeys: [],
    m2mFields: [],
    whereClauses: '' // my_field > 10 & another_field <= 80
  }
};

export const createDataClass = () => ({
  ...DEFAULT_DATA_CLASS,
  id: uuid()
});

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
