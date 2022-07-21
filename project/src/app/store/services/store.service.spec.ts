import { TestBed } from '@angular/core/testing';
import { StoreService } from './store.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'

describe('StoreService', () => {
  let service: StoreService;
  let httpMock: HttpTestingController
  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]});
    service = TestBed.inject(StoreService);
    httpMock = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
   });

   it ('should receive a valid response', () => {
      service.getStock("category", "item", (stock) => {});
      let testRequest = httpMock.expectOne("http://stratoserver...");
      expect(testRequest.request.method).toEqual('GET')
      testRequest.flush("42")
      httpMock.verify();    
   })
});
