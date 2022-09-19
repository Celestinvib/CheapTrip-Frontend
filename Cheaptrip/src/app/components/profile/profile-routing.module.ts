import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BargainsBookmarkedComponent } from './pages/bargains-bookmarked/bargains-bookmarked.component';
import { PersonalDataComponent } from './pages/personal-data/personal-data.component';
import { BargainsBookedComponent } from './pages/bargains-booked/bargains-booked.component';

const routes: Routes = [
  {
    path:'profile/mydata',
    component: PersonalDataComponent
  },
  {
    path:'profile/bookmarked',
    component: BargainsBookmarkedComponent
  },
  {
    path:'profile/booked',
    component: BargainsBookedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
