import { Component, OnInit } from '@angular/core';
import { Person } from '../../model/people.model';
import { ProfileService } from '../../model/profile.service';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {
  profile: Person;
  
  constructor(profileService:ProfileService) {
    profileService.getProfile((person) => this.profile = person)
   }

  ngOnInit(): void {
  }


}
