import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleSearchComponent } from './people-search.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonComponent } from '../person/person.component';

describe('PeopleSearchComponent', () => {
  let component: PeopleSearchComponent;
  let fixture: ComponentFixture<PeopleSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeopleSearchComponent, PersonComponent], imports: [HttpClientTestingModule, FormsModule, ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(PeopleSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
