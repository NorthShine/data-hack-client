import { Snackbar, Alert as Notification } from '@mui/material';
import { DEFAULT_ALERT_POSITION, DEFAULT_ALERT_TIMEOUT } from '../../constants';
import { useAlert } from '../../hooks/useAlert';

const Alert = () => {
  const { open, closeAlert, message, severity } = useAlert();

  return (
    <Snackbar
      open={open}
      autoHideDuration={DEFAULT_ALERT_TIMEOUT}
      anchorOrigin={DEFAULT_ALERT_POSITION}
      onClose={closeAlert}
    >
      <Notification onClose={closeAlert} severity={severity}>
        {message}
      </Notification>
    </Snackbar>
  );
};

export default Alert;
