import React, {Component} from 'react'
import BookContextProvider from './contexts/books'
import NavBar from './components/navbar'
import BookList from './components/book-list'
import BookForm from './components/book-form'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <BookContextProvider>
          <NavBar />
          <BookList />
          <BookForm />
        </BookContextProvider>
      </div>
    )
  }
}
