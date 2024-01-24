import { Component } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { ClockComponent } from '../../../util/components/clock/clock.component';
import { LogComponent } from '../../../util/components/log/log.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ClockComponent, LogComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(readonly configService:ConfigService){}
  company = this.configService.company
}
