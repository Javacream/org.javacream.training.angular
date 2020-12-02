import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooklistComponent } from './booklist.component';
import { BooksService } from '../../services/books.service';

describe('BooklistComponent', () => {
  let component: BooklistComponent;
  let fixture: ComponentFixture<BooklistComponent>;
  let booksServiceMock = jasmine.createSpyObj(BooksService, ["findAllBooks"])

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooklistComponent ], providers: [{provide: BooksService, useValue: booksServiceMock}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
