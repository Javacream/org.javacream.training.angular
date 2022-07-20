import { TestBed } from '@angular/core/testing';
import { CoffeeComponent } from './coffee.component';

describe('CoffeeComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CoffeeComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CoffeeComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
/*
  it('should render title', () => {
    const fixture = TestBed.createComponent(CoffeeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('Javacream app is running!');
  });
*/
});
