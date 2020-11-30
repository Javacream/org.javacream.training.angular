import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../services/config.service';
import { PeopleService } from '../../people/people.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile:any 
  constructor(private configService: ConfigService, private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.profile = this.peopleService.findProfile((profile) => this.profile = profile)
  }

}
