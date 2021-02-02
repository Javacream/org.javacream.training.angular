import { Component, OnInit } from '@angular/core';
import {Config} from '../../model/config'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  constructor(readonly config:Config) {}

  ngOnInit(): void {
  }

}
