import { Component, OnInit } from '@angular/core';
import {Person} from '../../model/people.model'
import {Config} from '../../model/config'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  appTitle:string
  profile:Person = {id:1000, lastname:"Sawitzki", firstname: "Rainer", gender: "m", height:183}
  constructor(config:Config) { 
    this.appTitle = config.appTitle
  }
  ngOnInit(): void {
  }

}
