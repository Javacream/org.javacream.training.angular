import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-app',
  template: `
    <p>
      third-app works!
    </p>
  `,
  styleUrls: ['./third-app.component.css']
})
export class ThirdAppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
