import React, {useContext, useState} from 'react';
import {BookContext} from '../contexts/books';
import  {bookActions} from '../reducers/books';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('')
  const {bookDispatch} = useContext(BookContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    bookDispatch({
      type: bookActions.ADD_BOOK,
      book: {title, author}
    })
    setTitle('');
    setAuthor('');
  };
  return (
    <form onSubmit={handleSubmit} className="book-form">
      <input name="title" placeholder="title" value={title} onChange={e => setTitle(e.target.value)} required />
      <input name="author" placeholder="author" value={author} onChange={e => setAuthor(e.target.value)} required />
      <button type="submit">Submit</button>
    </form>
  );
}

export default BookForm;