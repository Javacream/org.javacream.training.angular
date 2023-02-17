import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit, OnDestroy{
  actualTime = new Date()
  interval?: any
  ngOnInit(): void {
    this.interval = setInterval(() => this.actualTime = new Date())
  }
  ngOnDestroy(): void {
    clearInterval(this.interval)
  }

}
