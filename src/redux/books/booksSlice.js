import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    removeBook: (state, action) => {
      const idx = state.indexOf(action.payload);
      if (idx !== -1) state.splice(idx, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
