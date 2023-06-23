import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentComponent } from './content.component';
import { PeopleListComponent } from '../people-list/people-list.component';
import { PersonComponent } from '../person/person.component';
import { PeopleSearchComponent } from '../people-search/people-search.component';
import { PeopleInputComponent } from '../people-input/people-input.component';
import { PeopleDeleteComponent } from '../people-delete/people-delete.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
describe('ContentComponent', () => {
  let component: ContentComponent;
  let fixture: ComponentFixture<ContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentComponent, PeopleListComponent, PersonComponent, PeopleSearchComponent, PeopleInputComponent, PeopleDeleteComponent, PersonComponent], imports: [HttpClientTestingModule, FormsModule, ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
