import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'javacream-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  actualTime = new Date()
  constructor() { 
    setInterval(() => {
      this.actualTime = new Date()
  }, 5000)
  }
  ngOnInit(): void {
  }

}
