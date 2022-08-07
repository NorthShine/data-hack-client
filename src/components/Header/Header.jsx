import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styles from './Header.module.css';

const Header = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar
      position="static"
      color="primary"
      className={styles.appBar}
    >
      <Toolbar
        variant="dense"
        color="secondary"
      >
        <Typography
          variant="h6"
          color="inherit"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          NorthShine
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
);

export default Header;
