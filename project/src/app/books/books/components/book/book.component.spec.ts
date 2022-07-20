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

  it('should render a book', () => {
    component.book = {isbn: "ISBN42", title:"Title32", pages: 19.99, available:false}
    fixture.detectChanges()
    let element = fixture.debugElement.nativeElement
    const span = element.querySelector('span')
    //expect(div.textContent.endsWith('Book: isbn=ISBN42, title=Title32')).toBeTrue() });
    expect(span.textContent).toEqual('Book: isbn=ISBN42, title=Title32')
  });
});
