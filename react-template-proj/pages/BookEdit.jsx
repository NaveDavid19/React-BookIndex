import { bookService } from "../services/book.service.js"
import { showSuccessMsg } from "../services/event-bus.service.js"

const { useNavigate, useParams } = ReactRouterDOM
const { useState, useEffect } = React


export function BookEdit() {
    const [bookToEdit, setBookToEdit] = useState(bookService.getEmptyBook())

    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        if (params.bookId) {
            loadBook()
        }
    }, [])

    function loadBook() {
        bookService.get(params.bookId)
            .then(setBookToEdit)
            .catch(err => console.log('err:', err))
    }

    function handleChange({ target }) {
        const field = target.name
        let value = target.value

        target.type === 'number' ? +value : value
        setBookToEdit(prevBook => ({ ...prevBook, [field]: value }))
    }

    function handlePriceChange({ target }) {
        let value = +target.value
        const newListPrice = {
            amount: value,
            currencyCode: 'USD',
            isOnSale: false,
        }
        setBookToEdit((prevBook) => ({ ...prevBook, listPrice: newListPrice }))
    }

    function onSaveBook(ev) {
        ev.preventDefault()
        bookService.save(bookToEdit)
            .then(() => { navigate('/book')(showSuccessMsg(`Book successfully updated! ${params.bookId}`)) }
            )
            .catch(err => console.log('err', err))
    }

    const { title, listPrice } = bookToEdit
    const { amount } = listPrice

    return (
        < section className="car-edit" >
            <h1>Edit Book</h1>
            <form onSubmit={onSaveBook}>
                <label htmlFor="title">Title</label>
                <input onChange={handleChange} value={title} type="text" name="title" id="title" />

                <label htmlFor="amount">Min price: </label>
                <input onChange={handlePriceChange} value={amount} type="number" id="amount" name="amount" />

                <button disabled={!title}>Save</button>
            </form>

        </section >
    )
}