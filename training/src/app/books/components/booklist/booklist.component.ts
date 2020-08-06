import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../model/books';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() books:Array<Book>
}
