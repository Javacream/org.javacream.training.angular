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
    pages?:number
    available?:boolean
}


export let sampleBook:Book = {isbn: "Sample-Isbn", title: "Sample-Title", pages:200, available: true}
setTimeout(() => {
    sampleBook.title="CHANGED"
    console.log(sampleBook.title)
}, 3000)