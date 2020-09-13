import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponent } from './book.component';
import { sampleBook } from '../../model/books';
import { BooksService } from '../../services/books.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookComponent ], 
      providers: [BooksService],
      imports: [HttpClientModule]
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

});
