import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookContentComponent } from './book-content.component';

describe('BookContentComponent', () => {
  let component: BookContentComponent;
  let fixture: ComponentFixture<BookContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
