import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleListComponent } from './people-list.component';
import { PersonComponent } from '../person/person.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('PeopleListComponent', () => {
  let component: PeopleListComponent;
  let fixture: ComponentFixture<PeopleListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeopleListComponent, PersonComponent], imports:[HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(PeopleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
