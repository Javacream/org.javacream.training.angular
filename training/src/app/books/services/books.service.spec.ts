import { TestBed } from '@angular/core/testing';

import { BooksService } from './books.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'

describe('BooksService', () => {
  let service: BooksService;
  let testingHttpController : HttpTestingController
  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]});
    service = TestBed.inject(BooksService);
    testingHttpController = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should execute a get request while reading', () => {
    service.findAllBooks()
    let testRequest = testingHttpController.expectOne("http://localhost:8080/api/books")
    expect(testRequest.request.method).toEqual('GET')
    testRequest.flush([{isbn: "ISBN42", title:"Title32", pages: 19.99, available:false}])
    testingHttpController.verify()
  });

});
