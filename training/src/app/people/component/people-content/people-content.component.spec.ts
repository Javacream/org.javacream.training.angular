import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleContentComponent } from './people-content.component';

describe('PeopleContentComponent', () => {
  let component: PeopleContentComponent;
  let fixture: ComponentFixture<PeopleContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
