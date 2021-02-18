import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../../model/config.service'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(configService:ConfigService) {this.company = configService.company }

  ngOnInit(): void {
  }
  company:string
}
