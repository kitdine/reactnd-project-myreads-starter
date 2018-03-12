import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        onUpdateBook: PropTypes.func.isRequired,
        loading: PropTypes.object.isRequired
    }

    render() {
        const { book, onUpdateBook,loading } = this.props
        const bookCoverStyle = {
            width: 128,
            height: 193,
            backgroundImage: `url(${book.imageLinks.thumbnail})`
        }
        const loadingStyle = {
            backgroundImage: url('./icons/arrow-drop-down.svg')
        }
        return (
                <div className="book">
                    <div className="book-top">
                    <div className="book-cover" style={bookCoverStyle}></div>
                    <div className="book-shelf-changer" style={loading ? loadingStyle : ''}>
                        <select value={book.shelf === undefined ? 'none' : book.shelf} onChange={(shelf) => onUpdateBook(book, shelf.target.value)}>
                                <option value="" disabled>Move to...</option>
                                <option value="currentlyReading" >Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                </div>
        )
    }
}

export default Book