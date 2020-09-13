import { TestBed } from '@angular/core/testing';

import { BooksService } from './books.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('BooksService', () => {
  let service: BooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient],
      imports: [HttpClientModule]});
    service = TestBed.inject(BooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
