import React, {useContext} from 'react';
import {BookContext} from '../contexts/books';
import BookDetails from './book-details';

const BookList = () => {
  const {books} = useContext(BookContext);
  return (
    <div className="book-list">
      {books.length ? (
        <ul>
          {books.map(book => <BookDetails book={book} key={book.id} />)}
        </ul>
      ) : 'No books here ...'}
    </div>
  );
};

export default BookList;