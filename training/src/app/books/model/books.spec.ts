import {Book, BookClass} from './books'

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