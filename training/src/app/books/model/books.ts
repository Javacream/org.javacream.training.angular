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