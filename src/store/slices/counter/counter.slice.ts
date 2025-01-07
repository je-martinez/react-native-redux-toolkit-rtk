import { createSlice } from '@reduxjs/toolkit';

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
      state = { ...initialState };
    },
  },
  selectors: {
    selectCount: (state) => state.value,
  },
});

const { increment, decrement, reset } = counterSlice.actions;
const { selectCount } = counterSlice.selectors;

const counterReducer = counterSlice.reducer;

export { counterReducer, increment, decrement, reset, selectCount };
