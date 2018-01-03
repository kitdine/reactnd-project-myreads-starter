import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Book from './Book'

class ListBooks extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onUpdateBook: PropTypes.func.isRequired
    }

    render() {
        const { books, onUpdateBook } = this.props
        const shelfs = ["currentlyReading", "wantToRead", "read"]
        const shelfsTitle = ["Currently Reading", "Want to Read", "Read"]
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {shelfs.map((shelf, index) => (
                            <div key={index} className="bookshelf">
                                <h2 className="bookshelf-title">{shelfsTitle[index]}</h2>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                        {books.filter((b) => b.shelf === shelf).map((book) => (
                                            <li key={book.id}>
                                                <Book
                                                    book={book}
                                                    onUpdateBook={onUpdateBook}
                                                />
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="open-search">
                    <Link
                        to='/search'
                    >Add a book</Link>
                </div>
            </div>
        )
    }
}

export default ListBooks