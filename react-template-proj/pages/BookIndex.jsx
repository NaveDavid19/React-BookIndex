import { UserPreview } from '../cmps/UserPreview.jsx'
import { bookService } from '../services/book.service.js'

export function BookIndex() {
    return (
        <section>
            <h2>Book shop</h2>
            <UserPreview />
        </section>
    )
}
