import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  titl:string
  message:string

  constructor(){
    this.titl = 'App'
    this.message = 'Hello'
    setTimeout(() => {this.message = "World!!";console.log(this.message)}, 3000)
  }
}
