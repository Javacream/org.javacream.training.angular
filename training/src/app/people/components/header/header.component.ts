import { Component } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { PersonComponent } from '../person/person.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [PersonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(readonly configService:ConfigService ){}

}
