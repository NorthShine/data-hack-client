import React from 'react';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import styles from './Home.module.css';
import Fields from '../../components/Fields/Fields';
import { useAlert } from '../../hooks/useAlert';

const Home = () => {
  const alert = useAlert();

  const handleClick = () => {
    alert.success('Works!');
  };

  return (
    <div className={styles.home}>
      <Typography
        className={styles.title}
        variant="h6"
        color="inherit"
        component="div"
        sx={{ flexGrow: 2 }}
      >
        Библиотека
      </Typography>
      <Fields />
      <Button onClick={handleClick}>Открыть алерт</Button>
    </div>
  );
};

export default Home;
