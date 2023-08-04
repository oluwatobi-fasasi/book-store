import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBookAsync, selectAll } from '../redux/books/booksSlice';
import CircleProgressBar from './CircleProgressBar';

export default function BookCase() {
  const { books } = useSelector(selectAll);
  const dispatch = useDispatch();
  const handleRemoveBook = (itemId) => {
    dispatch(removeBookAsync(itemId));
  };
  const progress = 80;
  return (
    <div key="">
      {Object.entries(books).map(([id, book]) => book.map((b) => (
        <div key={id} className="bg-white">
          <div className="flex justify-between w-300 h-170 mt-9 py-8 pl-10 pr-20 rounded-md border border-white-three bg-white-two">
            <section>
              <p className="font-montserrat font-bold text-gray-900 opacity-50">{b?.category}</p>
              <h4 className="w-49 h-7 mt-1 mr-80 font-bold font-roboto text-3xl leading-tight tracking-tighter text-gray-800">
                {b?.title}
              </h4>
              <p className="Suzanne-Collins w-27 h-4 mt-1 font-robotoSlab text-s text-blue-400">
                {b?.author}
              </p>
              <div className="flex divide-x-4 mt-4 font-robot">
                <p className="pr-6 text-s text-blue-400">Comments</p>
                <button type="button" className="px-6 text-s text-blue-400" onClick={() => handleRemoveBook(id)}>Remove</button>
                <p className="px-6 text-s text-blue-400">Edit</p>
              </div>
            </section>
            <section className="flex divide-x-4">
              <div className="pr-20 flex">

                <CircleProgressBar progress={progress} />

                <p className="pl-2 pt-5">
                  <span className="text-4xl font-montserrat">64%</span>
                  <br />
                  {' '}
                  <span className="font-montserrat text-gray-900 opacity-50">Completed</span>
                </p>
              </div>
              <div className="pl-20">
                <p className="font-robot text-gray-900 opacity-50">CURRENT CHAPTER</p>
                <p className="font-robot text-gray-600 pt-2">Chapter 17</p>
                <button type="button" className="px-7 py-2 mt-10 rounded bg-blue-400 font-robot text-gray-200">UPDATE PROGRESS</button>
              </div>
            </section>
          </div>
        </div>
      )))}
    </div>
  );
}
