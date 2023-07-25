import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

export default function Form() {
  const dispatch = useDispatch();
  return (
    <div>
      <section className="mx-44 mt-11">
        <h2>ADD NEW BOOK</h2>
        <form action="" onSubmit={() => dispatch(addBook({ title: '', author: '', id: '' }))}>
          <input type="text" className="border border-grey-900 h-10" />
          <input type="text" className="border border-grey-900 ml-10 h-10" />
          <button type="submit" className="bg-blue-700 p-4 rounded-lg ml-10">ADD BOOK</button>
        </form>
      </section>
    </div>
  );
}
