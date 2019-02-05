import { Component, OnInit } from '@angular/core';
import { peopleModel } from 'src/model/people';

@Component({
  selector: 'people-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent implements OnInit {

  lastname: string;
  firstname: string;
  height: number;

  constructor() { }

  ngOnInit() {
  }

  saveAction() {
    peopleModel.create(this.lastname, this.firstname, this.height);
  }
  clearAction() {
    this.lastname = '';
    this.firstname = '';
    this.height = 0;
  }
}
