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
          <input type="text" className="Lesson-Panel" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
          <input type="text" className="Lesson-Panel2" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" />
          <select name="cars" id="cars" className="Lesson-Panel3 text-gray-900 opacity-50">
            <option value="" disabled selected hidden>Category</option>
            <option value="action">Action</option>
            <option value="horror">Horror</option>
            <option value="fiction">Fiction</option>
            <option value="action">Action</option>
          </select>

          <button type="submit" className="Rectangle-2 bg-blue-500"><span className="ADD-BOOK text-white">ADD BOOK</span></button>

        </form>
      </section>
    </div>
  );
}
