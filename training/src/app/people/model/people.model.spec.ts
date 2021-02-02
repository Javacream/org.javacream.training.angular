import {Person, PeopleService} from './people.model'

import { TestBed } from '@angular/core/testing';


describe('PeopleService', () => {
  let service: PeopleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeopleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create a person', () => {
    expect(service.create("Eg", "Al")).toBeGreaterThan(0);
  });
  it('should find a created person', () => {
      let id = service.create("Eg", "Al") 
    expect(service.findById(id)).toBeDefined();
  });
  it('should delete a created person', () => {
    let id = service.create("Eg", "Al")
    service.deleteById(id) 
  expect(service.findById(id)).toBeUndefined();
});
it('should contain a created person in findAll', () => {
    let length = service.findAll().length
    let id = service.create("Eg", "Al")
  expect(service.findAll().length).toBe((length + 1));
});

});

describe("People Model Tests", () => {
    it("should create a person using an object literal", () => {
        let person:Person = {id:1000, lastname:"Sawitzki", firstname:"Rainer", gender:"m", height:183}
        expect(person.lastname).toBe("Sawitzki")
    })


})