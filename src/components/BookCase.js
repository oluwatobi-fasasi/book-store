import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

export default function BookCase() {
  const { book } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div key="">
      {book.map((b) => (
        <div key="">
          <div className="flex justify-between mx-44 mt-20 bg-red-200">
            <section>
              <h4>
                Book Title :
                {b.title}
              </h4>
              <p>
                Author:
                {b.author}
              </p>
              <div className="flex divide-x-4 mt-4">
                <p className="pr-6">Comments</p>
                <button type="button" className="px-6" onClick={() => dispatch(removeBook(b.item_id))}>Remove</button>
                <p className="px-6">Edit</p>
              </div>
            </section>
            <section className="flex divide-x-4">
              <div className="pr-20">
                <div>Circle</div>
                <p>64% Completed</p>
              </div>
              <div className="pl-20">
                <p>CURRENT CHAPTER</p>
                <p>Chapter 17</p>
                <button type="button">UPDATE PROGRESS</button>
              </div>
            </section>
          </div>
        </div>
      ))}
    </div>
  );
}
