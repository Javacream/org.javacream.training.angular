import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookInputReactiveComponent } from './book-input-reactive.component';
import { BooksService } from '../../services/books.service';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';

describe('BookInputReactiveComponent', () => {
  let component: BookInputReactiveComponent;
  let fixture: ComponentFixture<BookInputReactiveComponent>;
  let mockBooksService = jasmine.createSpyObj(BooksService, ['create'])

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookInputReactiveComponent ], 
      imports: [ReactiveFormsModule, FormsModule],
      providers: [{provide: BooksService, useValue: mockBooksService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookInputReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
