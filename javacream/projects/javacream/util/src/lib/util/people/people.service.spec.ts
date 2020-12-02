import { TestBed } from '@angular/core/testing';

import { PeopleService } from './people.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'

describe('PeopleService', () => {
  let service: PeopleService;
  let testingHttpController : HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]});
    service = TestBed.inject(PeopleService);
    testingHttpController = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should execute a get request while reading', () => {
    service.findProfile( () => {})
    let testRequest = testingHttpController.expectOne("http://h2908727.stratoserver.net:8080/people/6")
    expect(testRequest.request.method).toEqual('GET')
    testingHttpController.verify()
  });

});
