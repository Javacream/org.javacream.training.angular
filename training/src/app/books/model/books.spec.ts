import {Book} from './books'

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
})
