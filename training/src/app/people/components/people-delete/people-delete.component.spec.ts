import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PeopleDeleteComponent } from './people-delete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('PeopleDeleteComponent', () => {
  let component: PeopleDeleteComponent;
  let fixture: ComponentFixture<PeopleDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeopleDeleteComponent], 
      imports: [HttpClientTestingModule, FormsModule, ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(PeopleDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
