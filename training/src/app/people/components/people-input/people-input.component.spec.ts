import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleInputComponent } from './people-input.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonComponent } from '../person/person.component';

describe('PeopleInputComponent', () => {
  let component: PeopleInputComponent;
  let fixture: ComponentFixture<PeopleInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeopleInputComponent, PersonComponent], imports: [HttpClientTestingModule, FormsModule, ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(PeopleInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
