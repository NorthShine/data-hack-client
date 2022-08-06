export const DEFAULT_ALERT_POSITION = {
  vertical: 'top',
  horizontal: 'center'
};

export const DEFAULT_ALERT_TIMEOUT = 3000;

export const DATA_TYPES = [
  'int', 'str', 'datetime', 'float', 'bool'
];

export const DEFAULT_DATA_CLASS = {
  name: 'MyDataclass',
  sqlModel:
  {
    fields: [
      {
        name: 'name',
        type: 'int',
        id: 'rnjfnekjnf'
      }
    ],
    foreignKeys: [],
    m2mFields: [],
    whereClauses: '' // my_field > 10 & another_field <= 80
  }

};
