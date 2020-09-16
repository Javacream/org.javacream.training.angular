import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDeleteComponent } from './book-delete.component';
import { BooksService } from '../../services/books.service';

describe('BookDeleteComponent', () => {
  let component: BookDeleteComponent;
  let fixture: ComponentFixture<BookDeleteComponent>;
  let mockBooksService = jasmine.createSpyObj(BooksService, ['deleteBookByIsbn'])
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookDeleteComponent ], 
      providers: [{provide: BooksService, useValue: mockBooksService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call delete in BooksService', () => {
    component.delete()
    expect(mockBooksService.deleteBookByIsbn).toHaveBeenCalled()

  });

});
