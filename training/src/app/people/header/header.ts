import { Component } from '@angular/core';
import { ConfigService } from '../config-service';
// import { Config } from '../config';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  config: ConfigService
  constructor(config: ConfigService){
    this.config = config
    console.log('******************')
  }
}
