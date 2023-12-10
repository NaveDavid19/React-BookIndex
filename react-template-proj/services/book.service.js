import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const BOOK_KEY = 'bookDB'
_createBooks()

export const bookService = {
    query,
    get,
    remove,
    save,
    getEmptyBook,
    getNextBookId,
    getFilterBy,
    setFilterBy,
    getDefaultFilter
}

function query(filterBy) {
    return storageService.query(BOOK_KEY)
        .then(books => {
            if (filterBy.txt) {
                const regex = new RegExp(filterBy.txt, 'i')
                books = books.filter(book => regex.test(book.title))
            }
            if (filterBy.price) {
                books = books.filter(book => book.listPrice.amount >= filterBy.price)
            }
            if (filterBy.publishedDate) {
                books = books.filter(book => book.publishedDate >= filterBy.publishedDate)
            }

            return books
        })
}

function get(bookId) {
    return storageService.get(BOOK_KEY, bookId)
}

function remove(bookId) {
    return storageService.remove(BOOK_KEY, bookId)
}

function save(book) {
    if (book.id) {
        return storageService.put(BOOK_KEY, book)
    } else {
        return storageService.post(BOOK_KEY, book)
    }
}

function getEmptyBook(title = '', price = 0) {
    return { id: '', title, price }
}

function getFilterBy() {
    return { ...filterBy }
}

function setFilterBy(filterBy = {}) {
    if (filterBy.txt !== undefined) filterBy.txt = filterBy.txt
    if (filterBy.price !== undefined) filterBy.price = filterBy.price
    if (filterBy.publishedDate !== undefined) filterBy.publishedDate = filterBy.publishedDate
    return filterBy
}
function getDefaultFilter() {
    return { txt: '', price: '', publishedDate: '' }
}

function getNextBookId(bookId) {
    return storageService.query(BOOK_KEY)
        .then(books => {
            let nextBookIdx = books.findIndex(book => book.id === bookId) + 1
            if (nextBookIdx === books.length) nextBookIdx = 0
            return books[nextBookIdx].id
        })
}
function _createBooks() {
    let books = utilService.loadFromStorage(BOOK_KEY)
    if (!books || !books.length) {
        books = [
            {
                "id": "OXeMG8wNskc",
                "title": "metus hendrerit",
                "subtitle": "mi est eros convallis auctor arcu dapibus himenaeos",
                "authors": [
                    "Barbara Cartland"
                ],
                "publishedDate": 1999,
                "description": "placerat nisi sodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum platea vehicula conubia fermentum habitasse congue suspendisse",
                "pageCount": 713,
                "categories": [
                    "Computers",
                    "Hack"
                ],
                "thumbnail": "http://coding-academy.org/books-photos/20.jpg",
                "language": "en",
                "listPrice": {
                    "amount": 109,
                    "currencyCode": "EUR",
                    "isOnSale": false
                }
            },
            {
                "id": "JYOJa2NpSCq",
                "title": "morbi",
                "subtitle": "lorem euismod dictumst inceptos mi",
                "authors": [
                    "Barbara Cartland"
                ],
                "publishedDate": 1978,
                "description": "aliquam pretium lorem laoreet etiam odio cubilia iaculis placerat aliquam tempor nisl auctor",
                "pageCount": 129,
                "categories": [
                    "Computers",
                    "Hack"
                ],
                "thumbnail": "http://coding-academy.org/books-photos/14.jpg",
                "language": "sp",
                "listPrice": {
                    "amount": 44,
                    "currencyCode": "EUR",
                    "isOnSale": true
                }
            },
            {
                "id": "1y0Oqts35DQ",
                "title": "at viverra venenatis",
                "subtitle": "gravida libero facilisis rhoncus urna etiam",
                "authors": [
                    "Dr. Seuss"
                ],
                "publishedDate": 1999,
                "description": "lorem molestie ut euismod ad quis mi ultricies nisl cursus suspendisse dui tempor sit suscipit metus etiam euismod tortor sagittis habitant",
                "pageCount": 972,
                "categories": [
                    "Computers",
                    "Hack"
                ],
                "thumbnail": "http://coding-academy.org/books-photos/2.jpg",
                "language": "he",
                "listPrice": {
                    "amount": 108,
                    "currencyCode": "ILS",
                    "isOnSale": false
                }
            }]
        utilService.saveToStorage(BOOK_KEY, books)
    }
}

function _createBook(title, price = 250) {
    const book = getEmptyBook(title, price)
    book.id = utilService.makeId()
    return book
}