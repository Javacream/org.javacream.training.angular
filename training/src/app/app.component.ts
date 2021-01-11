import { Component } from '@angular/core';
import {profile} from './model/people.data'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'training';

  profileGreeting(){
    return `Hello ${profile.firstname} ${profile.lastname}`
  }
}

