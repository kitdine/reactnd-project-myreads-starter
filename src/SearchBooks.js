import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Book from './Book'

class SearchBooks extends Component {
    static propTypes = {
        searchBooks: PropTypes.array.isRequired,
        onSearchResult: PropTypes.func.isRequired,
        onUpdateBook: PropTypes.func.isRequired
    }
    render() {
        const { searchBooks, onSearchResult, onUpdateBook } = this.props
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/' className='close-search'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input 
                            autoFocus
                            type="text" 
                            placeholder="Search by title or author"
                            onChange={(event) => onSearchResult(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        <ol className="books-grid">
                            {searchBooks.map((book) => (
                                <li key={book.id}>
                                    <Book
                                        book={book}
                                        onUpdateBook={onUpdateBook}
                                    />
                                </li>
                            ))}
                        </ol>
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBooks