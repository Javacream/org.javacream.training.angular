import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleServerListComponent } from '../component/people-server-list/people-server-list.component';
import { PersonInputComponent } from '../component/person-input/person-input.component';
import { PersonSearchComponent } from '../component/person-search/person-search.component';

const routes:Routes = [
  {path: "list", component: PeopleServerListComponent},
  {path: 'input', component: PersonInputComponent},
  {path:'search', component:PersonSearchComponent}
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }

