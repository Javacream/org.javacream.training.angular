import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent implements OnInit {
  currentView?: string;

  constructor() {}

  ngOnInit(): void {}

  changeView(view: string) {
    this.currentView = view;
  }
}
