import { BookFilter } from '../cmps/BookFilter.jsx'
import { BookList } from '../cmps/BookList.jsx'
import { bookService } from '../services/book.service.js'

const { useState, useEffect } = React


export function BookIndex() {

    const [books, setBooks] = useState(null)

    useEffect(() => {
        loadBooks()
        return () => {
            alert('Bye')
        }
    }, [])

    function loadBooks() {
        bookService.query()
            .then(books => setBooks(books))
            .catch(err => console.log('err:', err))
    }


    if (!books) return <div>Loading...</div>
    return (
        <section className="book-index">
            <h2>Book shop</h2>
            <BookFilter />
            <BookList books={books} />
        </section>
    )
}
