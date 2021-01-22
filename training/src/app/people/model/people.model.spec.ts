import {Person} from './people.model'


describe ("Person type works", () => {
	it ("person has id, lastname, ...", () => {
		let p:Person = {id:100, lastname: "Sawitzki", firstname:"Rainer", gender:"m", height:183}
		expect(p.lastname).toBe("Sawitzki")
})
})

import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { PeopleService } from './people.model';

describe('PeopleService', () => {
  let service: PeopleService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientModule]});
    service = TestBed.inject(PeopleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  xit('should create a person', () => {
    expect(() => service.create("TEST", "TEST")).not.toThrow();
  });
});


