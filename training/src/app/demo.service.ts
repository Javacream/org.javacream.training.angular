import { Injectable } from '@angular/core';
import { ConfigService } from './services/config/config.service';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(readonly configService: ConfigService) { 
    this.data = configService.demo
  }

  data = "Emil"

  doSomething(){
    console.log(this.data)
  }
}
