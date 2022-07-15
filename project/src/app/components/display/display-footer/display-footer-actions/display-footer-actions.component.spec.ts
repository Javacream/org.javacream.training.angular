import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFooterActionsComponent } from './display-footer-actions.component';

describe('DisplayFooterActionsComponent', () => {
  let component: DisplayFooterActionsComponent;
  let fixture: ComponentFixture<DisplayFooterActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayFooterActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayFooterActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
