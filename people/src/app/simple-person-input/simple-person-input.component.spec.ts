import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplePersonInputComponent } from './simple-person-input.component';

describe('SimplePersonInputComponent', () => {
  let component: SimplePersonInputComponent;
  let fixture: ComponentFixture<SimplePersonInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplePersonInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplePersonInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
