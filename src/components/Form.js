import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

export default function Form() {
  const dispatch = useDispatch();
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(addBook({ title, author, item_id: Date.now() }));
    setTitle('');
    setAuthor('');
  };
  return (
    <div>
      <section className="mx-44 mt-11">
        <h2>ADD NEW BOOK</h2>
        <form action="" onSubmit={submitForm}>
          <input type="text" className="border border-grey-900 h-10" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" />
          <input type="text" className="border border-grey-900 ml-10 h-10" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
          <button type="submit" className="bg-blue-700 p-4 rounded-lg ml-10">ADD BOOK</button>
        </form>
      </section>
    </div>
  );
}
