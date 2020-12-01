import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BookInputComponent } from './book-input.component';
import {HttpClientModule} from '@angular/common/http'

describe('BookInputComponent', () => {
  let component: BookInputComponent;
  let fixture: ComponentFixture<BookInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookInputComponent ], imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit ('creates book with the provided title', () => {
    component.titleInput = "FROM TEST"
    component.handleSave()
  })
});
