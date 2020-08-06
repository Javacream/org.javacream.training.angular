import { Component, OnInit } from '@angular/core';
import { TodoserviceService } from '../../todoservice.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  todos:Array<string>
  constructor(readonly todoService:TodoserviceService) { }

  ngOnInit(): void {
    this.todos = this.todoService.todos
  }


}
