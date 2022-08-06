import React from 'react';
import Typography from '@mui/material/Typography';
import PropTypes from 'proptypes';
import styles from './Fields.module.css';
import InputSet from './InputSet/InputSet';

const Fields = (props) => {
  const { items, dataClassId } = props;

  return (
    <div className={styles.fields}>
      <Typography
        className={styles.fieldsPlace}
        variant="h6"
        color="inherit"
        component="div"
        sx={{ flexGrow: 2 }}
      >
        Fields
      </Typography>
      <div className={styles.gridWrapper}>
        <Typography
          className={styles.name}
          variant="h6"
          color="inherit"
          component="div"
          sx={{ flexGrow: 2 }}
        >
          Название поля
        </Typography>
        <Typography
          className={styles.name2}
          variant="h6"
          color="inherit"
          component="div"
          sx={{ flexGrow: 2 }}
        >
          Название поля
        </Typography>
      </div>
      {items.map((item) => (
        <InputSet
          key={item.id}
          item={item}
          dataClassId={dataClassId}
        />
      ))}
    </div>
  );
};

Fields.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape()),
  dataClassId: PropTypes.string
};

export default Fields;
