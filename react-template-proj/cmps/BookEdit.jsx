
export function BookEdit() {


    return (
        < section >
            <h2>Add Book</h2>
            <form >
                <label htmlFor="txt">Title :</label>
                <input type="text" id="txt" name="txt" />

                <label htmlFor="price">Price :</label>
                <input type="number" id="price" name="price" />

                <button>Add Book</button>
            </form>
        </section >
    )

}