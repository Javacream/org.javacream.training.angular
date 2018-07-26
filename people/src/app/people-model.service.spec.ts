import { TestBed, inject } from '@angular/core/testing';

import { PeopleModelService } from './people-model.service';

describe('PeopleModelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PeopleModelService]
    });
  });

  it('should be created', inject([PeopleModelService], (service: PeopleModelService) => {
    expect(service).toBeTruthy();
  }));
});
