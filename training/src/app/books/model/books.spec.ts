import {Book, BookClass, BooksController} from './books'

let jsonData:Book = {
    isbn: "ISBN",
    title:"JSON",
    pages: 200,
    price: 19.99,
    available: true
}

describe('Books Model', () => {
    it('book class is working', () => {
        let aBook = new BookClass("ISBN", "Title", 200, 19.99, true)
        expect(aBook.isbn).toBe("ISBN");
    }),
    it('info is working', () => {
        let aBook = new BookClass("ISBN", "Title", 200, 19.99, true)
        expect(aBook.info()).toBe("Book: isbn=ISBN, title=Title");
    }),

    it('json is working', () => {
        let aBook:Book = {
            isbn: "ISBN",
            title:"JSON",
            pages: 200,
            price: 19.99,
            available: true
        }
        expect(aBook.isbn).toBe("ISBN");
    })
})
describe('Books Controller', () => {
    const title = "Typescript"
    let generatedIsbn = ""
    let booksController:BooksController = null
    beforeEach(() => {
        booksController = new BooksController()
        generatedIsbn = booksController.create(title, 400, 29.99, true)
    });
  
    it('controller generates a book', () => {
        expect(generatedIsbn).not.toBeNull();
    }),
    it('controller finds a book', () => {
        let book = booksController.findBookByIsbn(generatedIsbn)
        expect(book.title).toBe(title);
    }),
    it('controller retrieves list of books', () => {
        let book = booksController.findBookByIsbn(generatedIsbn)
        let books = booksController.findAll()
        expect(books).toContain(book)
    }),
    it('controller generates list of titles', () => {
        let booksTitles = booksController.findAllTitles()
        expect(booksTitles).toContain(title)
    }),
    it('controller generates list of titles', () => {
        let book = booksController.findBookByIsbn(generatedIsbn)
        booksController.deleteByIsbn(generatedIsbn)
        let books = booksController.findAll()
        expect(books).not.toContain(book)
    })
   
})