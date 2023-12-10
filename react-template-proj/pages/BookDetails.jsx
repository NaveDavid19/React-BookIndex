import { bookService } from "../services/book.service.js"

const { useState, useEffect } = React

export function BookDetails({ onBack, bookId }) {
    const [book, setBook] = useState(null)

    useEffect(() => {
        bookService.get(bookId).then(book => setBook(book))
    }, [])

    if (!book) return <div>Loading...</div>
    return (
        <section className="book-details">
            <h1>Book Title : {book.title}</h1>
            <img src={book.thumbnail} />
            <h1>Book Subtitle : {book.subtitle}</h1>
            <ul>Book Authors :
                {book.authors.map(author =>
                    <li key={author}>{author}</li>
                )}
            </ul>
            <h4>Book Price : {book.listPrice.amount} {book.listPrice.currencyCode}</h4>
            <button onClick={onBack}>Back</button>
        </section>
    )
}