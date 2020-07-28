import { Component, OnInit } from '@angular/core';
import {user} from '../../../ApplicationContext'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  actualUser = user
  constructor() { }

  ngOnInit(): void {
  }

}
