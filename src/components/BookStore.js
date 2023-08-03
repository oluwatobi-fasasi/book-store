import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBooksAsync } from '../redux/books/booksSlice';
import BookCase from './BookCase';
import Form from './Form';

export default function BookStore() {
  const dispatch = useDispatch();
  useEffect(() => {
    // Fetch books after the component has rendered
    dispatch(fetchBooksAsync());
  }, [dispatch]);

  return (
    <div className="bg-gray-100 pl-44 pr-44 pt-10">
      <BookCase />
      <Form />
    </div>
  );
}
