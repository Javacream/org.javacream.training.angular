import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BooksService } from '../../services/books.service';

import { BookInputComponent } from './book-input.component';

describe('BookInputComponent With Mock', () => {
  let component: BookInputComponent;
  let fixture: ComponentFixture<BookInputComponent>;
  let mockCreateBooksService = jasmine.createSpyObj(BooksService, ['create'])
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookInputComponent ], providers:[{provide: BooksService, useValue: mockCreateBooksService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should invoke create', () => {
    component.handleSave()

    expect(mockCreateBooksService.create).toHaveBeenCalled();
  });

});
