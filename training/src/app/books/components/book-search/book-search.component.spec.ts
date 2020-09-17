import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { BookSearchComponent } from './book-search.component';
import { BooksService } from '../../services/books.service';
import { FormsModule} from '@angular/forms';
import { BookComponent } from '../book/book.component';

describe('BookSearchComponent', () => {
  let component: BookSearchComponent;
  let fixture: ComponentFixture<BookSearchComponent>;
  let mockBooksService = {findBookByIsbn: (isbn) => {return Promise.resolve({isbn: "ISBN1", title:"Title1"})}}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookSearchComponent, BookComponent ], 
      imports: [FormsModule],
      providers: [{provide: BooksService, useValue: mockBooksService}]

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

  it('javascript search should find a Book', async(() => {
    
    fixture.debugElement.nativeElement.querySelector('#isbn-input').value = "ISBN1"
    fixture.debugElement.nativeElement.querySelector('#search-button').click()
    fixture.whenStable().then(() => {
      console.log("*****" + component.book)
      fixture.detectChanges()
      const p = fixture.debugElement.nativeElement.querySelector('p')
      expect(p.textContent).toEqual('Book: isbn=ISBN1, title=Title1')
    }) 
  }));

});
