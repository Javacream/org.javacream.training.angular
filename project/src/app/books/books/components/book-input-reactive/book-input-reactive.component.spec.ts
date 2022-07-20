import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookInputReactiveComponent } from './book-input-reactive.component';

xdescribe('BookInputReactiveComponent', () => {
  let component: BookInputReactiveComponent;
  let fixture: ComponentFixture<BookInputReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookInputReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookInputReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
