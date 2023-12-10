
export function BookPreview({ book }) {
    return (
        <article className="book-preview">
            <h2>Book Name : {book.title}</h2>
            <img src={book.thumbnail} />
            <h4>Book Price : {book.listPrice.amount} {book.listPrice.currencyCode}</h4>
        </article>
    )
}