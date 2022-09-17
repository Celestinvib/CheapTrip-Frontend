import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CitiesListComponent } from './components/admin/city/cities-list/cities-list.component';
import { CityAddComponent } from './components/admin/city/city-add/city-add.component';
import { CityUpdateComponent } from './components/admin/city/city-update/city-update.component';



const routes: Routes = [
  {
    path:'cities',
    component: CitiesListComponent
  },
  {
    path:'cities/add',
    component: CityAddComponent
  },
  {
    path:'cities/update/:id',
    component: CityUpdateComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
