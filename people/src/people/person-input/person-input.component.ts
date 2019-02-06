import { Component, OnInit } from '@angular/core';
import { PeopleControllerService } from 'src/controller/people-controller.service';

@Component({
  selector: 'people-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent implements OnInit {

  lastname: string;
  firstname: string;
  height: number;

  constructor(readonly controller: PeopleControllerService) { }

  ngOnInit() {
  }

  saveAction() {
    this.controller.create(this.lastname, this.firstname, this.height);
  }
  clearAction() {
    this.lastname = '';
    this.firstname = '';
    this.height = 0;
  }
}
