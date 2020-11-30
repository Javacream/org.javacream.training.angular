import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../services/config.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile:any 
  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    this.profile = this.configService.profile
  }

}
