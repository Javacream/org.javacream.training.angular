import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../../model/config.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(configService:ConfigService) { 
    this.appTitle = configService.appName
  }

  ngOnInit(): void {
  }

  appTitle: string

}
