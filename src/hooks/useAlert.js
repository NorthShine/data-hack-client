import { useDispatch, useSelector } from 'react-redux';
import { closeAlertAction, openAlertAction } from '../store/reducers/alert/alertReducer';

export const useAlert = () => {
  const { open, severity, message } = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  function closeAlert() {
    dispatch(closeAlertAction());
  }

  function warning(msg) {
    dispatch(openAlertAction({
      message: msg,
      severity: 'warning'
    }));
  }

  function error(msg) {
    dispatch(openAlertAction({
      message: msg,
      severity: 'error'
    }));
  }

  function info(msg) {
    dispatch(openAlertAction({
      message: msg,
      severity: 'info'
    }));
  }

  function success(msg) {
    dispatch(openAlertAction({
      message: msg,
      severity: 'success'
    }));
  }

  return {
    open,
    closeAlert,
    message,
    severity,
    warning,
    success,
    info,
    error
  };
};
