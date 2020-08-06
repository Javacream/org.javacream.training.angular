import { Component, OnInit } from '@angular/core';
import { TodoserviceService } from '../../todoservice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor(readonly todoService:TodoserviceService ) {}

  ngOnInit(): void {
  }
  todoForm = new FormGroup({
    todo: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)]))
  });
  save(){
    let todo = this.todoForm.value.todo
    this.todoService.todos.push(todo)
}
}
