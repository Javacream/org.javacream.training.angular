import { Component, OnInit } from '@angular/core';
import {config} from '../../model/people.data'
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  company = config.company

}
