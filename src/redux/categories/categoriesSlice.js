import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    status: (state) => {
      state.push('Under construction');
    },
  },
});

// Action creators are generated for each case reducer function
export const { status } = categorySlice.actions;

export default categorySlice.reducer;
