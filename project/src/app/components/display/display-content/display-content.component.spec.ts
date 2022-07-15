import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayContentComponent } from './display-content.component';

describe('DisplayContentComponent', () => {
  let component: DisplayContentComponent;
  let fixture: ComponentFixture<DisplayContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
