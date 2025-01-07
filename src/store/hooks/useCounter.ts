import {
  selectCount,
  increment as incrementFn,
  incrementAsync as incrementAsyncFn,
  decrement as decrementFn,
  reset as resetFn,
  selectStatus,
} from '../slices';
import { useAppDispatch, useAppSelector } from '../store.definition';

export const useCounter = () => {
  const count = useAppSelector(selectCount);
  const status = useAppSelector(selectStatus);

  const dispatch = useAppDispatch();

  const incrementAsync = ({ triggerError }: { triggerError: boolean }) =>
    dispatch(incrementAsyncFn({ amount: 1, triggerError }));

  const increment = () => dispatch(incrementFn());

  const decrement = () => dispatch(decrementFn());

  const reset = () => dispatch(resetFn());

  return { count, status, incrementAsync, increment, decrement, reset };
};
