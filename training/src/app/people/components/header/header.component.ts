import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../model/config.service';
import { Person } from '../../model/people.model';
import { ProfileService } from '../../model/profile.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private configService:ConfigService, readonly profileService:ProfileService) { 
    this.appTitle = configService.appTitle
    this.profile = profileService.getActualProfile()
  }

  ngOnInit(): void {
  }

  appTitle:string
  profile:Person

}
