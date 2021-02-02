import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  company:string
  constructor() {
    this.company = "Javacream"
   }

  ngOnInit(): void {
  }

}
