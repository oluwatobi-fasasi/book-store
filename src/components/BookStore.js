import React, { useEffect, useState } from 'react';
import BookCase from './BookCase';
import Form from './Form';

export default function BookStore() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks([
      {
        title: 'Love Bird',
        author: 'Suarez',
      },
    ]);
  }, []);

  return (
    <div>
      {books.map((book) => (
        <BookCase key="" book={book} />
      ))}
      <Form />
    </div>
  );
}
