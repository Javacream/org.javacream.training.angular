import { TestBed } from '@angular/core/testing';

import { PeopleControllerService } from './people-controller.service';

describe('PeopleControllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PeopleControllerService = TestBed.get(PeopleControllerService);
    expect(service).toBeTruthy();
  });
});
