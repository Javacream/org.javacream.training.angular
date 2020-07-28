import { Component, OnInit } from '@angular/core';
import {company} from '../../../ApplicationContext'
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footerText = company
  constructor() {

   }
  ngOnInit(): void {
  }

}
