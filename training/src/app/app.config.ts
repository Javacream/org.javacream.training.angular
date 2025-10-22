import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { Routes } from '@angular/router';
import { PeopleList } from './people/people-list/people-list';
import { PersonInput } from './people/person-input/person-input';

const routes:Routes = [
  {path: "list", component:PeopleList},  
  {path: "input", component:PersonInput},
]

export const appConfig: ApplicationConfig = {

  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    provideRouter(routes),
    
  ]
};
