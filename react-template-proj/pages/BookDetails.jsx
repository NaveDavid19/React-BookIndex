import { bookService } from "../services/book.service.js"
import { utilService } from "../services/util.service.js"

const { useState, useEffect } = React

export function BookDetails({ onBack, bookId }) {
    const [book, setBook] = useState(null)

    useEffect(() => {
        bookService.get(bookId).then(book => setBook(book))
    }, [])

    function onPageCount(pageCount) {
        if (pageCount > 500) return 'Serious Reading'
        if (pageCount > 200) return 'Descent Reading'
        if (pageCount > 100) return 'Light Reading'
    }

    function onPublishedDate(publishedDate) {
        const currYear = utilService.getCurrentYear()
        if (currYear - publishedDate > 10) return 'Vintage'
        if (currYear - publishedDate < 1) return 'New'
    }

    function onPrice(price) {
        if (price > 150) return 'red'
        if (price < 20) return 'green'
    }

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
            <h3>{onPageCount(book.pageCount)}</h3>
            <h3>{onPublishedDate(book.publishedDate)}</h3>
            <h3 className="sale">{book.listPrice.isOnSale ? 'On Sale' : null}</h3>
            <h4>Book Price : <span className={onPrice(book.listPrice.amount)}>{book.listPrice.amount}</span> {book.listPrice.currencyCode}</h4>
            <button onClick={onBack}>Back</button>
        </section>
    )
}