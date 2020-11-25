import { Component } from '@angular/core';
import {profile} from './people/data/people.data'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'training';
  profile = profile
}
