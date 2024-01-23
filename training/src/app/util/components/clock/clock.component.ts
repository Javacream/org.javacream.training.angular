import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.css'
})
export class ClockComponent implements OnInit, OnDestroy{
  actualTime = new Date()
  interval: any
  ngOnInit():void{
    this.interval = setInterval(() => {
      this.actualTime = new Date()
    }, 1000)
  }
  ngOnDestroy():void{
    clearInterval(this.interval)
  }
}
