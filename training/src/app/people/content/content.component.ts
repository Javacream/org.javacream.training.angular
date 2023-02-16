import { Component } from '@angular/core';
import { DemoService } from 'src/app/demo.service';
import { ConfigService } from 'src/app/services/config/config.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  constructor(readonly demoService: DemoService, readonly configService: ConfigService){
    demoService.doSomething()
    console.log(configService.demo)
  }

}
