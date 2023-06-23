import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockComponent } from './clock.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ClockComponent', () => {
  let component: ClockComponent;
  let fixture: ComponentFixture<ClockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClockComponent], imports: [HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(ClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
