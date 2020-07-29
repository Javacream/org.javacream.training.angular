import { TestBed } from '@angular/core/testing';

import { PeopleServerControllerService } from './people-server-controller.service';

describe('PeopleServerControllerService', () => {
  let service: PeopleServerControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeopleServerControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
