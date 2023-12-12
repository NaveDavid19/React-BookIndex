


export function ReviewList({ reviews }) {
    return (
        <section>
            <h1 className="review">Reviews</h1>
            {reviews.map(review => (
                <ul className="review-list" key={review.fullName}>
                    <li>Full-name : {review.fullName}</li>
                    <li>Rating : {review.rating}</li>
                    <li>Read-At : {review.readAt}</li>
                </ul>
            )
            )}
        </section>
    )
}