import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-people-server-list',
  templateUrl: './people-server-list.component.html',
  styleUrls: ['./people-server-list.component.css']
})
export class PeopleServerListComponent {
  constructor(readonly httpClient:HttpClient){}

}
