import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleSearchComponent } from './people-search.component';

describe('PeopleSearchComponent', () => {
  let component: PeopleSearchComponent;
  let fixture: ComponentFixture<PeopleSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeopleSearchComponent]
    });
    fixture = TestBed.createComponent(PeopleSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
