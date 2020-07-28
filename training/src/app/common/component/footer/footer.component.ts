import { Component, OnInit, Input } from '@angular/core';
import {company} from '../../../ApplicationContext'
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() footerText
  constructor() {

   }
  ngOnInit(): void {
  }

}
