


export function ReviewList({ reviews }) {
    return (
        <section>
            <h1>Reviews</h1>
            {reviews.map(review => (
                <ul key={review.fullName}>
                    <li>{review.fullName}</li>
                    <li>{review.rating}</li>
                    <li>{review.readAt}</li>
                </ul>
            )
            )}
        </section>
    )
}