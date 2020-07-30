import React, {useContext} from 'react';
import {BookContext} from '../contexts/books';

const NavBar = () => {
  const {books} = useContext(BookContext);
  return (
    <nav className="navbar">
      <h1>Reading List</h1>
      <p>currently, you have {books.length} books to get through</p>
    </nav>
  );
};

export default NavBar;
