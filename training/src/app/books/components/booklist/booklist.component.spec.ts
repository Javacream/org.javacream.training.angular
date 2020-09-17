import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooklistComponent } from './booklist.component';
import { BooksService } from '../../services/books.service';
import {BookComponent} from "../book/book.component"
describe('BooklistComponent', () => {
  let component: BooklistComponent;
  let fixture: ComponentFixture<BooklistComponent>;
  let mockBooksService = {findAllBooksHttpClient: (cb) => cb(["a book"])}//jasmine.createSpyObj(BooksService, ['findAllBooksHttpClient'])
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooklistComponent, BookComponent ], 
      providers: [{provide: BooksService, useValue: mockBooksService}]
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
    mockBooksService.findAllBooksHttpClient((data) => console.log(data))
  });
});
