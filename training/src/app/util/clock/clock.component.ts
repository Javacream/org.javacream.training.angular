import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  actualTime = new Date()
  constructor() { }

  ngOnInit(): void {
    setInterval(() => this.actualTime = new Date(), 0, 5000)
  }

}
