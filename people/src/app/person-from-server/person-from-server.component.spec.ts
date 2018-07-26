import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonFromServerComponent } from './person-from-server.component';

describe('PersonFromServerComponent', () => {
  let component: PersonFromServerComponent;
  let fixture: ComponentFixture<PersonFromServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonFromServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonFromServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
