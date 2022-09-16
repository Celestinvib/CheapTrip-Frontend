import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityAddComponent } from './components/admin/city/city-add/city-add.component';
import { CitiesListComponent } from './components/admin/city/cities-list/cities-list.component';


const routes: Routes = [
  {
    path:'cities/add',
    component: CityAddComponent
  },
  {
    path:'cities',
    component: CitiesListComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
