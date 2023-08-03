import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookAsync } from '../redux/books/booksSlice';

export default function Form() {
  const dispatch = useDispatch();
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(addBookAsync({
      title, author, item_id: Date.now(), category: 'Action',
    }));
    setTitle('');
    setAuthor('');
  };
  return (
    <div>
      <section className="mt-11 pb-16">
        <h2 className="font-montserrat font-bold text-gray-900 opacity-50 text-2xl pb-4">ADD NEW BOOK</h2>
        <form action="" onSubmit={submitForm} className="">
          <input type="text" className="border border-gray-300 h-14 pl-5 w-96" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
          <input type="text" className="border border-gray-300 ml-10 w-96 h-14 pl-5" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" />
          <select name="cars" id="cars" className="h-14 w-72 ml-10 outline-none border border-gray-300 bg-white pl-5">
            <option value="" disabled selected hidden>Category</option>
            <option value="action">Action</option>
            <option value="horror">Horror</option>
            <option value="fiction">Fiction</option>
            <option value="action">Action</option>
          </select>
          <button type="submit" className="ml-14 px-20 py-4 rounded bg-blue-400 font-robot font-bold text-white">ADD BOOK</button>
        </form>
      </section>
    </div>
  );
}
