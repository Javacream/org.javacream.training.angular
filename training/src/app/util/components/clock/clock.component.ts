import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setInterval(() => this.time = new Date(), 5000)
  }

  time = new Date()

}
