import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <header className="flex justify-between mx-44">
        <section className="flex">
          <h1 className="text-6xl">Bookstore CMS</h1>
          <div className="flex ml-10 pt-8">
            <Link to="/" className="">BOOKS</Link>
            <Link to="/categories" className="ml-10">CATEGORIES</Link>
          </div>
        </section>
        <button type="button">Login</button>
      </header>
    </div>
  );
}
