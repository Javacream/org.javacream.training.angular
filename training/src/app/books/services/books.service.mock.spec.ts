import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BooksService } from './books.service';

describe('BooksService with Mock', () => {
  let service: BooksService;
  let testingController: HttpTestingController
  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(BooksService);
    testingController =TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should execute a get', () => {
    service.findAllBooks();
    const req = testingController.expectOne('http://localhost:8080/api/books');
    expect(req.request.method).toEqual('GET');
    req.flush([{isbn:"ISBN1", title:"Title1"}])
    testingController.verify();
  });
});