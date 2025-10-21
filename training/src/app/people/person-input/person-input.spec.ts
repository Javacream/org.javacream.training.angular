import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonInput } from './person-input';

describe('PersonInput', () => {
  let component: PersonInput;
  let fixture: ComponentFixture<PersonInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
