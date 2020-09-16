import { Component, OnInit } from '@angular/core';
import { fromEvent, from, Subject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {
  names:Array<String> = []
  subject = new Subject()
  namesSource = combineLatest(this.subject, from(this.names))
  constructor() { }

  ngOnInit(): void {
  const source = fromEvent(document, 'click');
  const example = source.pipe(map(event => `Event time: ${event.timeStamp}`));
  const subscribe = example.subscribe(val => console.log(val));
  const subscribe2 = this.namesSource.subscribe(val => console.log(val))
  const subscribe3 = this.subject.subscribe(val => console.log(val))
  }
  dumpList(){
    this.names.forEach(e => console.log(e))
  }

  addElementToList(){
    this.names.push("Added@" + new Date())
    this.subject.next("subject Added@" + new Date())
  }
}
