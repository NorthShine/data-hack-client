import { Backdrop, CircularProgress } from '@mui/material';
import React from 'react';
import useSelector from '../../hooks/useSelector';

const Loader = () => {
  const loading = useSelector((state) => state.loader.loading);

  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={loading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Loader;
