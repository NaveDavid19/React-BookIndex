export function BookFilter() {

    return (
        <section>
            <h2>Filter Our Books</h2>
            <form >
                <label htmlFor="text">Book: </label>
                <input type="text" />
                <label htmlFor="Price">Price: </label>
                <input type="number" />
            </form>
        </section>
    )

}