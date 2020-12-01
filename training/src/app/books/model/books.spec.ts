import {Book, books} from './books'

describe('Books Model', () => {
    it('json is working', () => {
        let aBook:Book = {
            isbn: "ISBN",
            title:"JSON",
            pages: 200,
            available: true
        }
        expect(aBook.isbn).toBe("ISBN");
    })
    it ('books contains 5 elements', () => {
        expect(books.size).toBe(5)
    })
    it ('books has 5 books', () => {
        expect(Array.from(books.values()).length).toBe(5)
    })
    it ('books has 2 unavailable books', () => {
        expect(Array.from(books.values()).filter(b => !b.available).length).toBe(2)
    })
    it ('books has 3 available books', () => {
        expect(Array.from(books.values()).filter(b => b.available).length).toBe(3)
    })

    it ('books have titles starting with Title', () => {
        let booksTitles = Array.from(books.values()).map(b => b.title)
        booksTitles.forEach((title => expect(title.slice(0, 5)).toBe("Title")))
    })

})
