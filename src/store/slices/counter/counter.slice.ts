import { createSlice } from '@reduxjs/toolkit';

import { incrementAsync } from './counter.thunk';

enum ApiStatusEnum {
  IDLE = 'idle',
  LOADING = 'loading',
  FAILED = 'failed',
}

type ApiStatus = (typeof ApiStatusEnum)[keyof typeof ApiStatusEnum];

export interface CounterState {
  value: number;
  status: ApiStatus;
}

const initialState: CounterState = {
  value: 0,
  status: ApiStatusEnum.IDLE,
} satisfies CounterState;

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = initialState.value;
      state.status = initialState.status;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(incrementAsync.pending, (state) => {
      state.status = ApiStatusEnum.LOADING;
    });
    builder.addCase(incrementAsync.fulfilled, (state, action) => {
      state.value = action.payload;
      state.status = ApiStatusEnum.IDLE;
    });
    builder.addCase(incrementAsync.rejected, (state) => {
      state.status = ApiStatusEnum.FAILED;
    });
  },
  selectors: {
    selectCount: (state) => state.value,
    selectStatus: (state) => state.status,
  },
});

const { increment, decrement, reset } = counterSlice.actions;
const { selectCount, selectStatus } = counterSlice.selectors;

const counterReducer = counterSlice.reducer;

export { counterReducer, increment, decrement, reset, selectCount, selectStatus };
