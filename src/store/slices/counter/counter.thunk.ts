import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

import { fetchCount } from './counter.api';
import { CounterState } from './counter.slice';

const incrementAsyncAction = createAction<number>('counter/incrementAsync');

export const incrementAsync = createAsyncThunk<
  number,
  number,
  { state: { counter: CounterState } }
>(incrementAsyncAction.type, async (amount: number, { getState }) => {
  const { value } = getState().counter;
  const response = await fetchCount(value, amount);
  return response.data;
});
