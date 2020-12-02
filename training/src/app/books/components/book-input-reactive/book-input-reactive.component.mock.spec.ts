import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BookInputReactiveComponent } from './book-input-reactive.component';
import { BooksService } from '../../services/books.service';
import {ReactiveFormsModule } from '@angular/forms';

describe('BookInputReactiveComponentMock', () => {
  let component: BookInputReactiveComponent;
  let fixture: ComponentFixture<BookInputReactiveComponent>;

  let booksServiceMock = jasmine.createSpyObj(BooksService, ['create'])
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookInputReactiveComponent ], providers: [{provide: BooksService, useValue: booksServiceMock}], imports: [ReactiveFormsModule]
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

  it('save executes a create', () => {
    component.save()
    expect(booksServiceMock.create).toHaveBeenCalled()
  });

});
