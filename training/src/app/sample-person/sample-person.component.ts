import { Component, OnInit } from '@angular/core';
import { samplePerson as sp } from "../people"
@Component({
  selector: 'sample-person',
  templateUrl: './sample-person.component.html',
  styleUrls: ['./sample-person.component.css']
})
export class SamplePersonComponent implements OnInit {
  samplePerson = sp


  ngOnInit() {

  }

}

