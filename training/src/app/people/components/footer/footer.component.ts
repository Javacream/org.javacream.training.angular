import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../config.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  company:string

  constructor(private config:ConfigService) {
    this.company = config.company
   }

  ngOnInit(): void {
  }


}
