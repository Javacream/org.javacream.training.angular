import { Component } from '@angular/core';
import {Config} from '@people-workspace/config'
@Component({
  selector: 'lib-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  constructor(readonly config:Config){}
}
