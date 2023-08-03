import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <div className="bg w-350 h-24 pl-250 bg-white border-slate-200 border-b-2">
      <header className="flex justify-between mx-44">
        <section className="flex">
          <h1 className="w-60 h-9 mt-8 mr-15 font-bold font-montserrat text-3xl text-blue-500">Bookstore CMS</h1>
          <div className="flex ml-10 pt-8">
            <Link to="/" className="w-14 h-4 mt-4 mr-10 font-normal font-montserrat text-xs leading-none tracking-wide text-gray-800">BOOKS</Link>
            <Link to="/categories" className="w-26 h-4 mt-4 ml-166 opacity-50 font-normal font-montserrat text-xs leading-none tracking-wide text-gray-800">CATEGORIES</Link>
          </div>
        </section>
        <div className="w-10 h-10 mt-8 p-2 border-2 border-white-three rounded-full">
          <FontAwesomeIcon icon={faUser} className="w-4 h-4 text-blue-500" />
        </div>
      </header>
    </div>
  );
}
