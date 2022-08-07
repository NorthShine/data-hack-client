import React, { useCallback, useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { Button, Container } from '@mui/material';
import styles from './Home.module.css';
import useSelector from '../../hooks/useSelector';
import DataClass from '../../components/DataClass/DataClass';
import useLoader from '../../hooks/useLoader';
import { useAlert } from '../../hooks/useAlert';
import api from '../../api';
import { downloadFile } from '../../utils';

const Home = () => {
  const models = useSelector((state) => state.config.models);
  const loader = useLoader();
  const alert = useAlert();
  const [json, setJson] = useState(null);

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

  const handleDownloadClick = useCallback(() => {
    downloadFile(json);
  }, [json]);

  return (
    <Container className={styles.home}>
      <Typography
        className={styles.title}
        variant="h6"
        color="inherit"
        component="div"
        sx={{ flexGrow: 2 }}
      >
        Библиотека
      </Typography>
      {models.map((item) => (
        <DataClass key={item.id} id={item.id} />
      ))}
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
