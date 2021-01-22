import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonsearchComponent } from './personsearch.component';

describe('PersonsearchComponent', () => {
  let component: PersonsearchComponent;
  let fixture: ComponentFixture<PersonsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonsearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
