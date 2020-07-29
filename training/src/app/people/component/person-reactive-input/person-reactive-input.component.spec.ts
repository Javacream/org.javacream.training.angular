import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonReactiveInputComponent } from './person-reactive-input.component';

describe('PersonReactiveInputComponent', () => {
  let component: PersonReactiveInputComponent;
  let fixture: ComponentFixture<PersonReactiveInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonReactiveInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonReactiveInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
