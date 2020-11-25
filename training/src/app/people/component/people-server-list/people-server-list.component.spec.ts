import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleServerListComponent } from './people-server-list.component';

describe('PeopleServerListComponent', () => {
  let component: PeopleServerListComponent;
  let fixture: ComponentFixture<PeopleServerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleServerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleServerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
