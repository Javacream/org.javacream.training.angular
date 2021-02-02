import { Component, OnInit } from '@angular/core';
import {Person} from '../../model/people.model'
import {Config} from '../../model/config'
import {ProfileService} from '../../model/profile.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  appTitle:string
  profile:Person
  constructor(config:Config, profileService:ProfileService) { 
    this.appTitle = config.appTitle
    this.profile = profileService.profile
  }
  ngOnInit(): void {
  }

}
