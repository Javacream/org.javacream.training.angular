import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSearchComponent } from './book-search.component';
import { BooksService } from '../../services/books.service';
import { HttpClientModule } from '@angular/common/http';

describe('BookSearchComponent', () => {
  let component: BookSearchComponent;
  let fixture: ComponentFixture<BookSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookSearchComponent ], 
      providers: [BooksService],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
