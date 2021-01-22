import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { PersoninputComponent } from './personinput.component';

describe('PersoninputComponent', () => {
  let component: PersoninputComponent;
  let fixture: ComponentFixture<PersoninputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersoninputComponent ], imports: [HttpClientModule, FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersoninputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
