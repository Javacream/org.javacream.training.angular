import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondAppComponent } from './second-app.component';

describe('SecondAppComponent', () => {
  let component: SecondAppComponent;
  let fixture: ComponentFixture<SecondAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
