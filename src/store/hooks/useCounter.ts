import {
  selectCount,
  increment as incrementFn,
  incrementAsync as incrementAsyncFn,
  decrement as decrementFn,
} from '../slices';
import { useAppDispatch, useAppSelector } from '../store.definition';

export const useCounter = () => {
  const count = useAppSelector(selectCount);

  const dispatch = useAppDispatch();

  const incrementAsync = () => dispatch(incrementAsyncFn(1));

  const increment = () => dispatch(incrementFn());

  const decrement = () => dispatch(decrementFn());

  return { count, incrementAsync, increment, decrement };
};
