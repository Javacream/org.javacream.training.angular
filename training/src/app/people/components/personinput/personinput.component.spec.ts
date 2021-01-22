import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersoninputComponent } from './personinput.component';

describe('PersoninputComponent', () => {
  let component: PersoninputComponent;
  let fixture: ComponentFixture<PersoninputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersoninputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersoninputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
