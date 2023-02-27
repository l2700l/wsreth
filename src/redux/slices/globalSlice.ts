import { createSlice } from '@reduxjs/toolkit';
import { balance } from '../../types/balance';
import { user } from '../../types/user';
import { phase } from '../../types/phase';
import { time } from '../../types/time';

const initialState = {
  time: {} as time,
  phase: {} as phase,
  user: {} as user,
  balance: {} as balance,
};
export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    updateUser(state, action) {
      state.user = action.payload;
    },
    updateBalance(state, action) {
      state.balance = action.payload;
    },
    updatePhase(state, action) {
      state.phase = action.payload;
    },
    updateTime(state, action) {
      state.time = action.payload;
    },
  },
});

export const { updateUser, updateBalance, updatePhase, updateTime } =
  globalSlice.actions;
export default globalSlice.reducer;
