import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FuneralListComponent } from './funeral-list/funeral-list.component';
import { LoginComponent } from './login/login.component';
import { FuneralDataComponent } from './funeral-data/funeral-data.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: FuneralListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: FuneralDataComponent },
   { path: '**', component: PageNotFoundComponent }  // Wildcard route for a 404 page

];
const routes2: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
