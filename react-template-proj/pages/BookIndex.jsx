import { BookFilter } from '../cmps/BookFilter.jsx'
import { BookList } from '../cmps/BookList.jsx'
import { bookService } from '../services/book.service.js'
import { BookDetails } from "./BookDetails.jsx"
const { useState, useEffect } = React


export function BookIndex() {

    const [books, setBooks] = useState(null)
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())



    useEffect(() => {
        loadBooks()
    }, [filterBy])

    function loadBooks() {
        bookService.query(filterBy)
            .then(books => setBooks(books))
            .catch(err => console.log('err:', err))
    }

    function onSetFilter(filterBy) {
        setFilterBy(filterBy)
    }

    if (!books) return <div>Loading...</div>
    return (
        <section className="book-index">
            <h2>Book shop</h2>
            <BookFilter filterBy={filterBy} onSetFilter={onSetFilter} />
            <BookList books={books} />
        </section>
    )
}
