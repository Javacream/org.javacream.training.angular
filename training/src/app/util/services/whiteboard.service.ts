import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WhiteboardService {
  demo_channel = new Subject<string>()
  constructor() { }
  
}
