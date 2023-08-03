import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './books/booksSlice';
import categoryReducer from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    book: bookSlice,
    category: categoryReducer,
  },
});

export default store;
