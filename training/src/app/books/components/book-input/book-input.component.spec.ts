import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookInputComponent } from './book-input.component';
import { HttpClientModule } from '@angular/common/http';
import { BooksService } from '../../services/books.service';
import { FormsModule } from '@angular/forms';

describe('BookInputComponent', () => {
  let component: BookInputComponent;
  let fixture: ComponentFixture<BookInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookInputComponent ],
      providers: [BooksService],
      imports: [HttpClientModule, FormsModule]
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
});
