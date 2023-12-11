
const { useState, useEffect } = React


export function BookFilter({ filterBy, onSetFilter }) {
    const [filterByToEdit, setFilterByToEdit] = useState(filterBy)

    useEffect(() => {
        onSetFilter(filterByToEdit)
    }, [filterByToEdit])

    function onSetFilterBy(ev) {
        ev.preventDefault()
        onSetFilter(filterByToEdit)
    }

    function handleChange({ target }) {
        const field = target.name
        let value = target.value

        target.type === 'number' ? +value : value

        setFilterByToEdit(prevFilter => ({ ...prevFilter, [field]: value }))
    }

    const { txt, price, publishedDate } = filterByToEdit
    return (
        <section className="book-filter">
            <h2>Filter Our Books</h2>
            <form onSubmit={onSetFilterBy} >
                <label htmlFor="txt">Book title: </label>
                <input value={txt} onChange={handleChange} type="text" id="txt" name="txt" />

                <label htmlFor="price">Min price: </label>
                <input value={price || ''} onChange={handleChange} type="number" id="price" name="price" />

                <label htmlFor="publishedDate">Min published date: </label>
                <input value={publishedDate || ''} onChange={handleChange} type="number" id="publishedDate" name="publishedDate" />
                <button>Filter</button>
            </form>
        </section>
    )
}