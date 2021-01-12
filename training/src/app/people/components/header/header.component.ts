import { Component } from '@angular/core';
import { profile, config } from 'src/app/people/model/people.data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  appName = config.appName
  profile=profile
  
}
