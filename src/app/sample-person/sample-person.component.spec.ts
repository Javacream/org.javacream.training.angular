import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplePersonComponent } from './sample-person.component';

describe('SamplePersonComponent', () => {
  let component: SamplePersonComponent;
  let fixture: ComponentFixture<SamplePersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamplePersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplePersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
