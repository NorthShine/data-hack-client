import React, { useCallback, useEffect, useState } from 'react';
import { Button, Container } from '@mui/material';
import { Add, Delete } from '@mui/icons-material';
import styles from './Home.module.css';
import useSelector from '../../hooks/useSelector';
import DataClass from '../../components/DataClass/DataClass';
import useLoader from '../../hooks/useLoader';
import { useAlert } from '../../hooks/useAlert';
import api from '../../api';
import { downloadFile } from '../../utils';
import useDispatch from '../../hooks/useDispatch';
import { addDataClass, removeDataClass } from '../../store/units/config/actions';

const Home = () => {
  const models = useSelector((state) => state.config.models);
  const loader = useLoader();
  const alert = useAlert();
  const [json, setJson] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (json) setJson(null);
  }, [models]);

  const handleSubmit = useCallback(async () => {
    try {
      loader.start();
      const res = await api.createJSON({ models });
      setJson(res.data);
    } catch (err) {
      alert.error(err.message);
    } finally {
      loader.stop();
    }
  }, [loader]);

  const handleAddDataClassClick = useCallback(() => {
    dispatch(addDataClass());
  }, []);

  const handleRemoveDataClassClick = useCallback(() => {
    dispatch(removeDataClass());
  }, []);

  const handleDownloadClick = useCallback(() => {
    downloadFile(json);
  }, [json]);

  return (
    <Container className={styles.home}>
      {models.map((item) => (
        <DataClass key={item.id} id={item.id} />
      ))}
      <div className={styles.actions}>
        <Button
          variant="outlined"
          size="small"
          color="primary"
          onClick={handleAddDataClassClick}
          startIcon={<Add />}
        >
          добавить дата класс
        </Button>
        <Button
          variant="outlined"
          size="small"
          color="error"
          onClick={handleRemoveDataClassClick}
          startIcon={<Delete />}
        >
          удалить дата класс
        </Button>
      </div>
      <div className={styles.actions}>
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
      </div>
    </Container>
  );
};

export default Home;
