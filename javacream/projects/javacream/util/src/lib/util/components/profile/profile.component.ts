import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../people/people.service';

@Component({
  selector: 'javacream-util-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile = {lastname: "", firstname: ""}
  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.peopleService.findProfile(this.up)
  }

  up = (profile) => {
    this.profile = profile
  }
}
