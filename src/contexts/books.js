import React, {createContext, useReducer, useEffect} from 'react';
import { bookReducer } from '../reducers/books';

export const BookContext = createContext();

export const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, [], () => JSON.parse(localStorage.getItem('books')));
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books))
  }, [books]);
  return (
    <BookContext.Provider value={{books, bookDispatch: dispatch}}>
      {props.children}
    </BookContext.Provider>
  );

}

export default BookContextProvider;