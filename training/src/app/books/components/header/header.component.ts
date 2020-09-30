import { Component, OnInit} from '@angular/core';
import { whiteboard } from 'src/app/whiteboard';
import { Book } from '../../model/books';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  actualSearchResult:Book

  ngOnInit(){
    whiteboard.searchResult.subscribe((book) => this.actualSearchResult = book)
    
  }
  headerText = "B O O K S"
  retriveHeaderText(){
    return this.headerText
  }
}
