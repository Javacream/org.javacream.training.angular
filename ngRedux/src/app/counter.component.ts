import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset, set } from './counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  count: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count = store.select('count');
  }

  uiIncrement() {
    this.store.dispatch(increment());
  }

  uiDecrement() {
    this.store.dispatch(decrement());
  }

  uiReset() {
    this.store.dispatch(reset());
  }

  uiSet() {
    this.store.dispatch(set());
  }
}