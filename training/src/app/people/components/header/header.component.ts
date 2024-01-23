import { Component } from '@angular/core';
import { config } from '../../model/config';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  appName = config.appName
  constructor(readonly configService:ConfigService ){}

}
