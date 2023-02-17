import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WhiteboardService {
  personCreation = new Subject<number>()
  personDeletion = new Subject<number>()

  constructor() {}
}