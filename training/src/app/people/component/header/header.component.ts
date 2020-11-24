import { Component, OnInit } from '@angular/core';
import {profile} from '../../data/people.data'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  appProfile = profile
  appHeader = "PEOPLE"
  constructor() { }
v
  ngOnInit(): void {
  }

}

