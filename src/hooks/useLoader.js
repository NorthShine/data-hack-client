import { setLoading } from '../store/units/loader/actions';
import useDispatch from './useDispatch';

const useLoader = () => {
  const dispatch = useDispatch();

  return {
    start: () => {
      dispatch(setLoading(true));
    },
    stop: () => {
      dispatch(setLoading(false));
    }
  };
};

export default useLoader;
