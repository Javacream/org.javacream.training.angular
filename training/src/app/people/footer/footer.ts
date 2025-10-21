import { Component } from '@angular/core';
import { ConfigService } from '../config-service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  constructor(readonly config: ConfigService){}
}
