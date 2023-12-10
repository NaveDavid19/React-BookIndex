import { BookFilter } from '../cmps/BookFilter.jsx'
import { BookList } from '../cmps/BookList.jsx'
import { bookService } from '../services/book.service.js'
import { BookDetails } from "./BookDetails.jsx"
const { useState, useEffect } = React


export function BookIndex() {

    const [books, setBooks] = useState(null)
    const [selectedBookId, setSelectedBookId] = useState(null)


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

    function onSelectBookId(bookId) {
        setSelectedBookId(bookId)
    }


    if (!books) return <div>Loading...</div>
    return (
        <section className="book-index">
            {!selectedBookId &&
                <React.Fragment>
                    <h2>Book shop</h2>
                    <BookFilter />
                    <BookList books={books} onSelectBookId={onSelectBookId} />
                </React.Fragment>
            }
            {selectedBookId && <BookDetails onBack={() => setSelectedBookId(null)} bookId={selectedBookId} />}
        </section>
    )
}
