import React from 'react'
import { Route, BrowserRouter  } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    // showSearchPage: false
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }
  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
    book.shelf = shelf
    this.setState(state => ({
      books: state.books.filter((b) => b.id !== book.id).concat([book])
    }))
  }
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route exact path='/' render={() => (
              <ListBooks 
                books={this.state.books}
                onUpdateBook={this.updateBook}
              />
          )} />
          <Route path='/search' render={({ history }) => (
            <SearchBooks />
          )} /> 
        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
