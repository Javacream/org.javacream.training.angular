import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../model/config.service';
import { ProfileService } from '../../model/profile.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private configService:ConfigService, private profileService:ProfileService) { 
    this.appTitle = configService.appTitle
  }

  ngOnInit(): void {
  }

  appTitle:string

  profileInfo():string{
    let profile =this.profileService.getActualProfile()
    return `User: ${profile.firstname} ${profile.lastname}`
  }

}
