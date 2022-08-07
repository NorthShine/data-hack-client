import React, { useCallback } from 'react';
import Typography from '@mui/material/Typography';
import PropTypes from 'proptypes';
import { Button } from '@mui/material';
import { Add, Delete } from '@mui/icons-material';
import styles from './ForeignKeys.module.css';
import InputSet from './InputSet/InputSet';
import useDispatch from '../../../hooks/useDispatch';
import { addForeignKey, removeForeignKey } from '../../../store/units/config/actions';

const ForeignKeys = (props) => {
  const { items, dataClassId } = props;
  const dispatch = useDispatch();

  const handleAddForeignKeyClick = useCallback(() => {
    dispatch(addForeignKey({
      dataClassId
    }));
  }, [dataClassId]);

  const handleRemoveForeignKeyClick = useCallback(() => {
    dispatch(removeForeignKey({
      dataClassId
    }));
  }, [dataClassId]);

  return (
    <div className={styles.fields}>
      <Typography
        className={styles.fieldsPlace}
        variant="h6"
        color="inherit"
        component="div"
        sx={{ flexGrow: 2 }}
      >
        Поля других таблиц (ForeignKeys)
      </Typography>
      <div className={styles.setInput}>
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
          className={styles.name}
          variant="h6"
          color="inherit"
          component="div"
          sx={{ flexGrow: 2 }}
        >
          Тип
        </Typography>
      </div>
      {items.map((item) => (
        <InputSet
          key={item.id}
          item={item}
          dataClassId={dataClassId}
        />
      ))}
      <div className={styles.actions}>
        <Button
          variant="outlined"
          size="small"
          color="primary"
          onClick={handleAddForeignKeyClick}
          startIcon={<Add />}
        >
          добавить
        </Button>
        <Button
          variant="outlined"
          size="small"
          color="error"
          onClick={handleRemoveForeignKeyClick}
          startIcon={<Delete />}
        >
          удалить
        </Button>
      </div>
    </div>
  );
};

ForeignKeys.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape()),
  dataClassId: PropTypes.string
};

export default ForeignKeys;
