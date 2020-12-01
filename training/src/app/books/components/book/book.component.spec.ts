import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http'

import { BookComponent } from './book.component';
import { sampleBook } from '../../model/books';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookComponent ], imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    component.book = sampleBook
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('deletes a book', () => {
    expect(component.delete("ISBN1")).not.toThrow());
  }

});
