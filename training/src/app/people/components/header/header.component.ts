import { Component } from '@angular/core';
import { profile, appName } from 'src/app/model/people.data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  appName = appName
  profileGreeting(){
    return `Hello ${profile.firstname} ${profile.lastname}`
  }

}
