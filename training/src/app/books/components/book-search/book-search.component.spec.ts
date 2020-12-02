import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSearchComponent } from './book-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BooksService } from '../../services/books.service';

describe('BookSearchComponent', () => {
  let component: BookSearchComponent;
  let fixture: ComponentFixture<BookSearchComponent>;
  let booksServiceMock = jasmine.createSpyObj(BooksService, ["findByIsbn"])
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookSearchComponent ], providers: [{provide: BooksService, useValue: booksServiceMock}], imports: [ReactiveFormsModule]
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
