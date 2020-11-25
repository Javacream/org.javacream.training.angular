import { TestBed } from '@angular/core/testing';

import { PeopleControllerService } from './people-controller.service';

describe('PeopleControllerService', () => {
  let service: PeopleControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeopleControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
