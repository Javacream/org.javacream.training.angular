import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PersonClass, Person } from './model/people';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'training'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('training');
  });

  it(`should work`, () => {
    expect(true).toBeTruthy();
  });


});