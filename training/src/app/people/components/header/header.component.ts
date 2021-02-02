import { Component, OnInit } from '@angular/core';
import {Person} from '../../model/people.model'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  appTitle = "P E O P L E"
  profile:Person = {id:1000, lastname:"Sawitzki", firstname: "Rainer", gender: "m", height:183}
  constructor() { }

  ngOnInit(): void {
  }

}
