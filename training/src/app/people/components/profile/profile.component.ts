import { Component, OnInit } from '@angular/core';
import { Person } from '../../model/people.model';
import {ProfileService} from '../../model/profile.service'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile:Person
  constructor(readonly profileService:ProfileService) { 
    this.profile = profileService.getProfile()
  }

  ngOnInit(): void {
  }

}
