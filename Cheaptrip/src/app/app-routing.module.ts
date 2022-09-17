import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/admin/home/home.component';
import { CitiesListComponent } from './components/admin/city/cities-list/cities-list.component';
import { CityAddComponent } from './components/admin/city/city-add/city-add.component';
import { CityUpdateComponent } from './components/admin/city/city-update/city-update.component';



const routes: Routes = [
  {
    path:'site-admin/cities',
    component: CitiesListComponent
  },
  {
    path:'site-admin/cities/add',
    component: CityAddComponent
  },
  {
    path:'site-admin/cities/update/:id',
    component: CityUpdateComponent
  },
  {
    path:'site-admin/home',
    component: HomeComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
