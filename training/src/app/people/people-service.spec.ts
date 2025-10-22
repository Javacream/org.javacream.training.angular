import { TestBed } from '@angular/core/testing';
import { PeopleService } from './people-service';


xdescribe('PeopleService', () => {
  let service: PeopleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeopleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it ('creates a person', () => {
    expect(service.create("Hu", "Go")).toBeTruthy()
  })

  it ('finds a created person', () => {
    let id = service.create("Hu", "Go")
    let result = service.findById(id)
    expect(result?.lastname).toBe("Hu")
  })
  it ('deletes a created person', () => {
    let id = service.create("Hu", "Go")
    let result = service.deleteById(id)
    expect(result).toBe(true)
  })
  it ('searching unknown id retrieves undefined', () => {
    let result = service.findById(47)
    expect(result).toBeUndefined()
  })
});