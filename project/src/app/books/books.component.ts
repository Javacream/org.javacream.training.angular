import { Component, OnInit } from '@angular/core';
import { ConsoleloggerService } from './services/consolelogger.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(readonly log: ConsoleloggerService) { }

  ngOnInit(): void {
  }

}
