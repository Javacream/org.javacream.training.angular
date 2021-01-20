import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  appTitle:string = "P E O P L E"

  profileInfo():string{
    return "User: Rainer Sawitzki"
  }

}
