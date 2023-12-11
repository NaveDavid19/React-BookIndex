import { LongText } from "../cmps/LongText.jsx"
import { bookService } from "../services/book.service.js"
import { utilService } from "../services/util.service.js"

const { useState, useEffect } = React
const { useParams, useNavigate } = ReactRouterDOM


export function BookDetails() {
    const [book, setBook] = useState(null)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadBook()
    }, [params.bookId])

    function loadBook() {
        bookService.get(params.bookId)
            .then(book => setBook(book))
            .catch(err => {
                console.log('err:', err)
                navigate('/')
            })
    }

    function onBack() {
        navigate('/book')
    }

    function getPageCount(pageCount) {
        if (pageCount > 500) return pageCount += ' - Serious Reading'
        else if (pageCount > 200) return pageCount += ' - Descent Reading'
        else if (pageCount > 100) return pageCount += ' - Light Reading'
    }

    function getPublishedDate(publishedDate) {
        const currYear = utilService.getCurrentYear()
        const diff = currYear - publishedDate
        if (diff > 10) return publishedDate += 'Vintage'
        else if (diff < 1) return publishedDate += 'New'
    }

    function getPriceClass(price) {
        if (price > 150) return 'red'
        else if (price < 20) return 'green'
        else return ''
    }

    if (!book) return <div>Loading...</div>
    return (
        <section className="book-details">
            <h1>Book Title : {book.title}</h1>
            <img src={book.thumbnail} />
            <h1>Book Subtitle : {book.subtitle}</h1>
            <ul> Author{book.authors.lenght > 1 ? 's' : ''} :
                {book.authors.map(author =>
                    <li key={author}>{author}</li>
                )}
            </ul>
            <h3>{getPageCount(book.pageCount)}</h3>
            <h3>{getPublishedDate(book.publishedDate)}</h3>
            <h3 className="sale">{book.listPrice.isOnSale && 'On Sale'}</h3>
            <h4>Book Price : <span className={getPriceClass(book.listPrice.amount)}>{book.listPrice.amount}</span> {book.listPrice.currencyCode}</h4>
            {<LongText txt={book.description} length={20} />}
            <button onClick={onBack}>Back</button>
        </section>
    )
}