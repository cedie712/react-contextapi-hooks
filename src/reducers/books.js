import {v4 as uuidv4} from 'uuid';

export const bookActions = {
  ADD_BOOK: 'ADD_BOOK',
  REMOVE_BOOK: 'REMOVE_BOOK',
};

export const bookReducer = (state, action) => {
  switch(action.type) {
    case bookActions.ADD_BOOK:
      return [
        {
          title: action.book.title,
          author: action.book.author,
          id: uuidv4(),
        },
        ...state
      ];
    case bookActions.REMOVE_BOOK:
      return state.filter(book => book.id !== action.id);
    default:
      return state;
  }
};