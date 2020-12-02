import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import { PeopleService } from '../../people/people.service';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let peopleServiceMock = jasmine.createSpyObj(PeopleService, ['findProfile'])
  peopleServiceMock.findProfile.and.callFake((update) => update({lastname: 'Meier', firstname: 'Hans'}) )
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileComponent ], providers: [{provide: PeopleService, useValue: peopleServiceMock}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have called findProfile', () => {
    expect(peopleServiceMock.findProfile).toHaveBeenCalled();
  });
  it('should render Hans Meier', () => {
    let p = fixture.nativeElement.querySelector('p')
    console.log(p)
    expect(p.textContent).toBe("Hans Meier")
  });

});
