import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFooterComponent } from './display-footer.component';

describe('DisplayFooterComponent', () => {
  let component: DisplayFooterComponent;
  let fixture: ComponentFixture<DisplayFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
