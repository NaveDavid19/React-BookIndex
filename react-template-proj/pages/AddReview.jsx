import { bookService } from "../services/book.service.js"
import { showSuccessMsg } from "../services/event-bus.service.js"


const { useState } = React
const { useNavigate, useParams } = ReactRouterDOM


export function AddReview() {
    const [bookToReview, setBookToReview] = useState(bookService.getEmptyReview())

    const navigate = useNavigate()



    function handleChange({ target }) {
        const field = target.name
        let value = target.value

        target.type === 'number' ? +value : value

        setBookToReview(prevReview => ({ ...prevReview, [field]: value }))
    }

    function onSetReview(ev) {
        ev.preventDefault()
        console.log('hey');
        navigate('/book')
    }

    const { fullName, rating, readAt } = bookToReview
    return (
        <section>
            <form onSubmit={onSetReview} >
                <label htmlFor="fullName">Full name: </label>
                <input onChange={handleChange} type="text" id="fullName" name="fullName" />

                <label htmlFor="rating">Rating: </label>
                <input onChange={handleChange} type="number" min="1" max="5" id="rating" name="rating" />

                <label htmlFor="readAt">Read at: </label>
                <input onChange={handleChange} type="date" id="readAt" name="readAt" />
                <button disabled={!fullName || !rating || !readAt}>Save</button>

            </form>
        </section>
    )
}