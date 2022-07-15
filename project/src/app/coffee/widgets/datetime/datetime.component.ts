import { Component, OnInit } from '@angular/core';
import { DatetimeService } from 'src/app/coffee/services/datetime.service';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.component.html',
  styleUrls: ['./datetime.component.css'],
})
export class DatetimeComponent implements OnInit {
  currentTime?: string;

  constructor(private datetimeSvc: DatetimeService) {
    this.setupClock();
  }

  ngOnInit(): void {}

  private setupClock() {
    this.updateClock();
    setInterval(() => this.updateClock(), 1000);
  }

  private updateClock() {
    this.currentTime = this.datetimeSvc.toCustomDateTimeString(new Date());
  }
}
