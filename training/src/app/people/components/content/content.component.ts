import { Component, OnInit } from '@angular/core';
import { Person } from '../../model/people.model';
import { PeopleService } from '../../people.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  ngOnInit(): void {
  }


}
