import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  appHeader = "PEOPLE"
  constructor() { }
v
  ngOnInit(): void {
  }

}

export let HeaderComponentObject = {
  appHeader: "PEOPLE"
}
