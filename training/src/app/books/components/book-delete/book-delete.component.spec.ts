import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDeleteComponent } from './book-delete.component';
import { BooksService } from '../../services/books.service';
import { ReactiveFormsModule } from '@angular/forms';

describe('BookDeleteComponent', () => {
  let component: BookDeleteComponent;
  let fixture: ComponentFixture<BookDeleteComponent>;
  let booksServiceMock = jasmine.createSpyObj(BooksService, ['delete'])
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookDeleteComponent ], providers: [{provide: BooksService, useValue: booksServiceMock}], imports: [ReactiveFormsModule]
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
