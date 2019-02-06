import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonLoaderComponent } from './person-loader.component';

describe('PersonLoaderComponent', () => {
  let component: PersonLoaderComponent;
  let fixture: ComponentFixture<PersonLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
