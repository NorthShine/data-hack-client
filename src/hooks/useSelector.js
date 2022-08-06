import { useContext } from 'react';
import { StateContext } from '../providers/StateProvider';

const useSelector = (selector) => {
  const context = useContext(StateContext);
  return selector(context.state);
};

export default useSelector;
