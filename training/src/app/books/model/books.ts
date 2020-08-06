/*
export class Book{
	isbn:string
	title:string
	price:number
	pages:number
    available:boolean
    
    constructor(isbn, title, pages,price, available){
        this.isbn = isbn
        this.title = title
        this.pages = pages
        this.price = price
        this.available = available
    }

    info(){
        return `Book: isbn=${this.isbn}, title=${this.title}`
    }
}
*/
export interface Book{
	isbn:string
	title:string
	price:number
	pages:number
    available?:boolean
}
export class BookClass implements Book{
    constructor(readonly isbn:string, readonly title:string, readonly pages:number, readonly price:number, readonly available:boolean){}

    info(){
        return `Book: isbn=${this.isbn}, title=${this.title}`
    }
}

export class BooksController{
    books = new Map<string, Book>()
    counter = 0
    constructor(){
        for (let i:number = 42; i < 47; i++){
            let book = new BookClass(`ISBN-${i}`, `Title-${i}`, i, 1.99*i, true)
            this.books.set(book.isbn, book)

        }        
    }

    create(title:string, pages:number, price:number, available:boolean):string{
        this.counter++
        let book = new BookClass(`ISBN-${this.counter}`, title, pages, price, available)
        this.books.set(book.isbn, book)
        return book.isbn
    }

    findBookByIsbn(isbn:string):Book{
        return this.books.get(isbn)
    }
	findAll(): Array<Book> {
        return Array.from(this.books.values())
    }
 	update(book: Book):void{
        this.books.set(book.isbn, book)
     }
	deleteByIsbn(isbn:string){
        this.books.delete(isbn)
    }
	findAllTitles(): Array<string>{
        return Array.from(this.books.values()).map((book) => book.title)
    }

}

export let sampleBook:Book = new BookClass("Sample-Isbn", "Sample-Title", 200, 19.99, true)

setTimeout(() => {
    sampleBook.title="CHANGED"
    console.log(sampleBook.title)
}, 3000)