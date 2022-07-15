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


export let books = new Map<string, Book>()

books.set("ISBN1", {isbn: "ISBN1", title: "Title1", pages:200, available: true})
books.set("ISBN2", {isbn: "ISBN2", title: "Title2", pages:20, available: false})
books.set("ISBN3", {isbn: "ISBN3", title: "Title3", pages:2, available: true})
books.set("ISBN4", {isbn: "ISBN4", title: "Title4", pages:100, available: true})
books.set("ISBN5", {isbn: "ISBN5", title: "Title5", pages:15000, available: false})

export let Empty:Book = {isbn: "", title: "", pages:0, available: true}
