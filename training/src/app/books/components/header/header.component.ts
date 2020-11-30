import { Component} from '@angular/core';
import { ConfigService } from '../../../services/config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  constructor(private configService: ConfigService){}
  retriveHeaderText(){
    return this.configService.appName
  }
}
