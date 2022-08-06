import { openAlert, closeAlert as closeAlertAction } from '../store/units/actions';
import useDispatch from './useDispatch';
import useSelector from './useSelector';

export const useAlert = () => {
  const { open, severity, message } = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  function closeAlert() {
    dispatch(closeAlertAction());
  }

  function warning(msg) {
    dispatch(openAlert({
      message: msg,
      severity: 'warning'
    }));
  }

  function error(msg) {
    dispatch(openAlert({
      message: msg,
      severity: 'error'
    }));
  }

  function info(msg) {
    dispatch(openAlert({
      message: msg,
      severity: 'info'
    }));
  }

  function success(msg) {
    dispatch(openAlert({
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
