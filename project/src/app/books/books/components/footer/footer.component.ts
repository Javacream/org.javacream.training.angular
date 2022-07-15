import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../services/config.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footer:string
  constructor(private configService: ConfigService){}
  ngOnInit(): void {
    this.footer = this.configService.company
  }

}
