import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { BookInputComponent } from './book-input.component';
import { BooksService } from '../../services/books.service';
import { FormsModule} from '@angular/forms';

describe('BookInputComponent', () => {
  let component: BookInputComponent;
  let fixture: ComponentFixture<BookInputComponent>;
  let mockBooksService = jasmine.createSpyObj(BooksService, ['create'])

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookInputComponent ], 
      imports: [FormsModule]
      providers: [{provide: BooksService, useValue: mockBooksService}]

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

  it('should invoke create in BooksService', () => {
    component.handleSave()
    expect(mockBooksService.create).toHaveBeenCalled();
  });
  it('javascript click event should invoke create in BooksService', fakeAsync(() => {
    fixture.debugElement.nativeElement.querySelector('#the-button').click()
    expect(mockBooksService.create).toHaveBeenCalled();
  }));

});
