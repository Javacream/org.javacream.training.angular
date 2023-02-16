import { Component } from '@angular/core';
import { ConfigService } from 'src/app/services/config/config.service';
import { PersonIF } from '../model/people.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(readonly configService: ConfigService){
    this.headerText = configService.title
    this.user = configService.user
  }

  headerText:string
  user:PersonIF
}
