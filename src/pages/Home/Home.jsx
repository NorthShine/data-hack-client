import React from 'react';
import Typography from '@mui/material/Typography';
import styles from './Home.module.css';
import Fields from '../../components/Fields/Fields';

const Home = () => (
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

  </div>
);

export default Home;
