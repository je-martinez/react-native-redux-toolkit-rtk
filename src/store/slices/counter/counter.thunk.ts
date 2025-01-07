import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

import { fetchCount } from './counter.api';
import { CounterState } from './counter.slice';

const incrementAsyncAction = createAction<number>('counter/incrementAsync');

type IncrementAsyncPayload = {
  amount: number;
  triggerError: boolean;
};

export const incrementAsync = createAsyncThunk<
  number,
  IncrementAsyncPayload,
  { state: { counter: CounterState } }
>(incrementAsyncAction.type, async ({ amount, triggerError }, { getState }) => {
  const { value } = getState().counter;
  const response = await fetchCount(value, amount, { triggerError });
  return response.data;
});
