import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreQueryComponent } from './store-query.component';

xdescribe('StoreQueryComponent', () => {
  let component: StoreQueryComponent;
  let fixture: ComponentFixture<StoreQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreQueryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
