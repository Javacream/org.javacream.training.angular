import { TestBed } from '@angular/core/testing';

import { PeopleService } from './people.service';

describe('PeopleService', () => {
  let service: PeopleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeopleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it ('creates a person', () => {
    expect(service.createPerson("Hu", "Go")).toBeTruthy()
  })

  it ('finds a created person', () => {
    let id = service.createPerson("Hu", "Go")
    let result = service.findPersonById(id)
    expect(result?.lastname).toBe("Hu")
  })
  it ('searching unknown id retrieves undefined', () => {
    let result = service.findPersonById(47)
    expect(result).toBeUndefined()
  })
});
