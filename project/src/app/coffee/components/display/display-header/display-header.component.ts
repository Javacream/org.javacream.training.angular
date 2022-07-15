import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-display-header',
  templateUrl: './display-header.component.html',
  styleUrls: ['./display-header.component.css']
})
export class DisplayHeaderComponent implements OnInit {
  @Input('appTitle') title = 'Kaffeeautomat';
  @Input() subtitle = '';

  constructor(private titleSvc: Title) { }

  ngOnInit(): void {
    const subtitle = this.subtitle.length > 0 ? `${this.subtitle} :: ` : '';

    this.titleSvc.setTitle(`${subtitle}${this.title}`)
  }

}
