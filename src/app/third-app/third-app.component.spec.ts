import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdAppComponent } from './third-app.component';

describe('ThirdAppComponent', () => {
  let component: ThirdAppComponent;
  let fixture: ComponentFixture<ThirdAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
