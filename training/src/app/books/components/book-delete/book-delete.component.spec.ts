import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BooksService } from '../../services/books.service';

import { BookDeleteComponent } from './book-delete.component';

describe('BookDeleteComponent', () => {
  let component: BookDeleteComponent;
  let fixture: ComponentFixture<BookDeleteComponent>;
  let mockDeleteBooksService = jasmine.createSpyObj(BooksService, ['delete'])
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookDeleteComponent ], providers:[{provide: BooksService, useValue: mockDeleteBooksService}], imports:[FormsModule]
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
});
