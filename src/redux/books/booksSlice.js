import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/XFn3dQth1UvlMWGy08Uk/books';

export const fetchBooksAsync = createAsyncThunk('book/fetchBooks', async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    return error;
  }
});

export const addBookAsync = createAsyncThunk(
  'book/addBook',
  async (bookData, thunkAPI) => {
    try {
      const response = await axios.post(API_BASE_URL, bookData);
      thunkAPI.dispatch(fetchBooksAsync());
      return response.data;
    } catch (error) {
      return error;
    }
  },
);

export const removeBookAsync = createAsyncThunk(
  'book/removeBook',
  async (itemId, thunkAPI) => {
    try {
      await axios.delete(`${API_BASE_URL}/books/${itemId}`);
      thunkAPI.dispatch(fetchBooksAsync());
      return itemId;
    } catch (error) {
      return error;
    }
  },
);

const initialState = [{
  books: [],
}];

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooksAsync.fulfilled, (state, action) => {
        state.books = action.payload;
      })

      // .addCase(addBookAsync.fulfilled, (state, action) => state.books.push(action.payload))
      .addCase(removeBookAsync.fulfilled, (state, action) => {
        state.filter((book) => book.item_id !== action.payload);
      });
  },
});

// export const selectAll = ((state) => state);
export default bookSlice.reducer;
