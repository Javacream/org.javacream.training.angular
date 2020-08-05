import { Component } from '@angular/core';
import { my_var, my_var2 } from './demo-types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = my_var;
}
