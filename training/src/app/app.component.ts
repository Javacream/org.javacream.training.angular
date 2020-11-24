import { Component } from '@angular/core';
import {profile} from './people/data/people.data'
import { peopleModel } from './people/model/people';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'training';
  profile = profile
  people = peopleModel.findAll()

  handlePersonCreation(id:number){
    this.people = peopleModel.findAll()
  }
}
