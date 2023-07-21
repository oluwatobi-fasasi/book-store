import React from 'react';
import PropTypes from 'prop-types';

export default function BookCase({ book }) {
  return (
    <div>
      <div className="flex justify-between mx-44 mt-20 bg-red-200">
        <section>
          <h4>
            Book Title :
            {book.title}

          </h4>
          <p>
            Author:
            {book.author}
          </p>
          <div className="flex divide-x-4 mt-4">
            <p className="pr-6">Comments</p>
            <p className="px-6">Remove</p>
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
      <div className="flex justify-between mx-44 mt-20 bg-red-200">
        <section>
          <h4>
            Book Title:
            {book.title}
          </h4>
          <p>
            Author:
            {book.author}
          </p>
          <div className="flex divide-x-4 mt-4">
            <p className="pr-6">Comments</p>
            <p className="px-6">Remove</p>
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
      <div className="flex justify-between mx-44 mt-20 bg-red-200">
        <section>
          <h4>
            Book Title:
            {book.title}
          </h4>
          <p>
            Author:
            {book.author}
          </p>
          <div className="flex divide-x-4 mt-4">
            <p className="pr-6">Comments</p>
            <p className="px-6">Remove</p>
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
  );
}
BookCase.propTypes = {
  book: PropTypes.objectOf(PropTypes.string, PropTypes.string)
    .isRequired,
};
