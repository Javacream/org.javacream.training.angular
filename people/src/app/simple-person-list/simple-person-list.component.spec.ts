import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplePersonListComponent } from './simple-person-list.component';

describe('SimplePersonListComponent', () => {
  let component: SimplePersonListComponent;
  let fixture: ComponentFixture<SimplePersonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplePersonListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplePersonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
