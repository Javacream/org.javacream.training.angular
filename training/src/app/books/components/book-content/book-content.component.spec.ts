import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookContentComponent } from './book-content.component';
import { BooksService } from '../../services/books.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';
describe('BookContentComponent', () => {
  let component: BookContentComponent;
  let fixture: ComponentFixture<BookContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookContentComponent, RouterLink], 
      providers: [BooksService],
      imports: [HttpClientModule], schemas: [NO_ERRORS_SCHEMA]
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
