import { Button, Container, TextField, Typography } from '@mui/material';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import PropTypes from 'proptypes';
import Fields from './Fields/Fields';
import useSelector from '../../hooks/useSelector';
import useDispatch from '../../hooks/useDispatch';
import { setDataClassName, setWhereClauses } from '../../store/units/config/actions';
import styles from './DataClass.module.css';
import useLoader from '../../hooks/useLoader';
import { useAlert } from '../../hooks/useAlert';
import api from '../../api';
import { downloadFile } from '../../utils';

const DataClass = (props) => {
  const { id } = props;
  const data = useSelector((state) => state.config.data);
  const dispatch = useDispatch();
  const loader = useLoader();
  const alert = useAlert();
  const [json, setJson] = useState(null);

  useEffect(() => {
    if (json) setJson(null);
  }, [data]);

  const dataClass = useMemo(
    () => data.find((item) => item.id === id),
    [data, id]
  );

  const handleDataClassNameChange = useCallback((event) => {
    const { value } = event.target;
    dispatch(setDataClassName({
      dataClassId: id,
      value
    }));
  }, [id]);

  const handleWhereClausesChange = useCallback((event) => {
    const { value } = event.target;
    dispatch(setWhereClauses({
      dataClassId: id,
      value
    }));
  }, [id]);

  const handleSubmit = useCallback(async () => {
    try {
      loader.start();
      const res = await api.createDataClass(data);
      setJson(res.data);
    } catch (err) {
      alert.error(err.message);
    } finally {
      loader.stop();
    }
  }, [loader]);

  const handleDownloadClick = useCallback(() => {
    downloadFile(json);
  }, [json]);

  return (
    <Container className={styles.dataClass}>
      <div className={styles.container}>
        <Typography
          className={styles.title}
          variant="h6"
        >
          Имя таблицы
        </Typography>
        <TextField
          size="small"
          value={dataClass.name}
          onChange={handleDataClassNameChange}
        />
      </div>
      <Fields
        items={dataClass.sqlModel.fields}
        dataClassId={id}
      />
      <div className={styles.container}>
        <Typography
          className={styles.title}
          variant="h6"
        >
          where_clauses
        </Typography>
        <TextField
          size="small"
          placeholder="my_field > 10 & another_field <= 80"
          value={dataClass.whereClauses}
          onChange={handleWhereClausesChange}
        />
      </div>
      <Button
        variant="contained"
        onClick={handleSubmit}
      >
        Отправить
      </Button>
      {json && (
        <Button
          variant="outlined"
          onClick={handleDownloadClick}
        >
          Скачать JSON
        </Button>
      )}
    </Container>
  );
};

DataClass.propTypes = {
  id: PropTypes.string
};

export default DataClass;
