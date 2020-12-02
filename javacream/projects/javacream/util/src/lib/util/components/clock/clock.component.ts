import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'javacream-util-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  actualTime = new Date()
  constructor() { 
    setInterval(() => {
      this.actualTime = new Date()
  }, 1000)
  }
  ngOnInit(): void {
  }

}
