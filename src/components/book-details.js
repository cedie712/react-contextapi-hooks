import React, {useContext} from 'react';
import {BookContext} from '../contexts/books';
import { bookActions } from '../reducers/books';

const BookDetails  = ({book}) => {
  const {bookDispatch} = useContext(BookContext);
  return (
    <li onClick={() => bookDispatch({type: bookActions.REMOVE_BOOK, id: book.id})} className="book-details">
      <div>
        <h3>{book.title}</h3>
        <p>{book.author}</p>
      </div>
    </li>
  );
};

export default BookDetails;