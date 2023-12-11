import { bookService } from "../services/book.service.js"
import { showSuccessMsg } from "../services/event-bus.service.js"


const { useState } = React
const { useNavigate } = ReactRouterDOM

export function AddReview({ bookId }) {
    const navigate = useNavigate()
    const [review, setReview] = useState(bookService.getEmptyReview())


    const disableSave = !(review.fullName && review.rating && review.readAt)

    function handleChange({ target }) {
        const field = target.name
        const value = target.value
        setReview(prevReview => ({ ...prevReview, [field]: value }))
    }


    function onSetReview(ev) {
        ev.preventDefault()
        bookService.addReview(bookId, review)
    }

    return (
        <section>
            <form onSubmit={onSetReview} >
                <label htmlFor="fullName">Full name: </label>
                <input onChange={handleChange} type="text" id="fullName" name="fullName" />

                <label htmlFor="rating">Rating: </label>
                <input onChange={handleChange} type="number" min="1" max="5" id="rating" name="rating" />

                <label htmlFor="readAt">Read at: </label>
                <input onChange={handleChange} type="date" id="readAt" name="readAt" />
                <button disabled={disableSave}> Save</button>

            </form>
        </section>
    )
}