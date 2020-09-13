import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookContentComponent } from './book-content.component';
import { BooksService } from '../../services/books.service';
import { HttpClientModule } from '@angular/common/http';

describe('BookContentComponent', () => {
  let component: BookContentComponent;
  let fixture: ComponentFixture<BookContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookContentComponent ], 
      providers: [BooksService],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
