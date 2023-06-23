import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './people/components/header/header.component';
import { ContentComponent } from './people/components/content/content.component';
import { FooterComponent } from './people/components/footer/footer.component';
import { PeopleListComponent } from './people/components/people-list/people-list.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PersonComponent } from './people/components/person/person.component';
import { PeopleSearchComponent } from './people/components/people-search/people-search.component';
import { PeopleInputComponent } from './people/components/people-input/people-input.component';
import { PeopleDeleteComponent } from './people/components/people-delete/people-delete.component';
import { ClockComponent } from './util/components/clock/clock.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent,HeaderComponent, ContentComponent, FooterComponent, PeopleListComponent, PersonComponent, PeopleSearchComponent, PeopleInputComponent, PeopleDeleteComponent, ClockComponent], imports: [HttpClientTestingModule]
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

  xit('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const htmlElement = fixture.nativeElement as HTMLElement;
    expect(htmlElement.querySelector('span')?.textContent).toContain('Hu');
  });
});
