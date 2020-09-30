import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BooksService } from '../../services/books.service';

import { BooklistComponent } from './booklist.component';

describe('BooklistComponent', () => {
  let component: BooklistComponent;
  let fixture: ComponentFixture<BooklistComponent>;
  let mockBooksService = jasmine.createSpyObj(BooksService, ['findAllBooksHttpClient'])
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooklistComponent ], providers: [{provide: BooksService, useValue: mockBooksService}]
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
