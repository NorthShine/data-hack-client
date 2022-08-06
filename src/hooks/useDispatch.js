import { useContext } from 'react';
import { StateContext } from '../providers/StateProvider';

const useDispatch = () => {
  const context = useContext(StateContext);
  return ({ type, payload }) => context.setState({ type, payload });
};

export default useDispatch;
