import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplePersonDetailComponent } from './simple-person-detail.component';

describe('SimplePersonDetailComponent', () => {
  let component: SimplePersonDetailComponent;
  let fixture: ComponentFixture<SimplePersonDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplePersonDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplePersonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
