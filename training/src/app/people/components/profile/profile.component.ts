import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../../model/profile.service'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(readonly profileService:ProfileService) { 
  }

  ngOnInit(): void {
  }

}
