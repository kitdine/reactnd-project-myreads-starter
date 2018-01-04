import React from 'react'
import { Route, BrowserRouter  } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    // book list array
    books: [],
    // search page search result book array
    searchBooks: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((bookArray) => {
      this.setState({ books: bookArray })
    })
  }
  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
    book.shelf = shelf
    this.setState(state => ({
      books: state.books.filter((b) => b.id !== book.id).concat([book])
    }))
  }
  searchBooksByText = (query) => {
    BooksAPI.search(query).then((searchResult) => {
      if(searchResult instanceof Array) {
        searchResult.map(book => (this.state.books.filter((b) => b.id === book.id).map(b => book.shelf = b.shelf)))
        this.setState({ searchBooks: searchResult })
      }  
    })
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
            <SearchBooks 
              onSearchResult={this.searchBooksByText}
              searchBooks={this.state.searchBooks}
              onUpdateBook={this.updateBook}
            />
          )} /> 
        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
