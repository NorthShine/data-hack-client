import React from 'react';
import Typography from '@mui/material/Typography';
import styles from './Home.module.css';
import useSelector from '../../hooks/useSelector';
import DataClass from '../../components/DataClass/DataClass';

const Home = () => {
  const dataClasses = useSelector((state) => state.config.data);

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
      {dataClasses.map((item) => (
        <DataClass key={item.id} id={item.id} />
      ))}
    </div>
  );
};

export default Home;
