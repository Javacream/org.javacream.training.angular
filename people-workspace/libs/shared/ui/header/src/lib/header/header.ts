import { Component } from '@angular/core';
import {Config} from '@people-workspace/config'
@Component({
  selector: 'lib-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  constructor(readonly config:Config){}
}
