import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooklistComponent } from './booklist.component';
import { BooksService } from '../../services/books.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('BooklistComponent', () => {
  let component: BooklistComponent;
  let fixture: ComponentFixture<BooklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooklistComponent ], 
      providers: [BooksService],
      imports: [HttpClientModule]
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
  });
});
