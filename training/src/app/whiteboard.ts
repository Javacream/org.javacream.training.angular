import {BehaviorSubject} from 'rxjs'
import { Book } from './books/model/books'
export let whiteboard = {
    log: new BehaviorSubject(""),
    searchResult: new BehaviorSubject({isbn:"", title:""} as Book),
    bookList: new BehaviorSubject([] as Array<Book>),

}