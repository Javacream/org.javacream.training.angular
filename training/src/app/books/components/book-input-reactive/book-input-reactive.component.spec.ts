import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookInputReactiveComponent } from './book-input-reactive.component';
import { BooksService } from '../../services/books.service';
import { HttpClientModule } from '@angular/common/http';

describe('BookInputReactiveComponent', () => {
  let component: BookInputReactiveComponent;
  let fixture: ComponentFixture<BookInputReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookInputReactiveComponent ], 
      providers: [BooksService],
      imports: [HttpClientModule]
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
