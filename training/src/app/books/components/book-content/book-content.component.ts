import { Component, OnInit } from '@angular/core';
import {sampleBook} from '../../model/books' 


@Component({
  selector: 'app-book-content',
  templateUrl: './book-content.component.html',
  styleUrls: ['./book-content.component.css']
})
export class BookContentComponent implements OnInit {
  book = sampleBook
  constructor() { }

  ngOnInit(): void {
  }

}
