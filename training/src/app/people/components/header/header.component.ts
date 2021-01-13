import { Component } from '@angular/core';
import {ConfigService} from '../../config.service'
import { Person } from '../../model/people.model';
import {ProfileService} from '../../profile.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
    appName:string
    profile:Person
    constructor(private config:ConfigService, private profileService:ProfileService){
    this.appName = config.appName
    this.profile=profileService.actualProfile()
  }
  
}
