import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BargainsBookmarkedComponent } from './pages/bargains-bookmarked/bargains-bookmarked.component';
import { PersonalDataComponent } from './pages/personal-data/personal-data.component';
import { BargainsBookedComponent } from './pages/bargains-booked/bargains-booked.component';
import { ProfileComponent } from './profile.component';

const routes: Routes = [
  {
    path:'mydata',
    component: PersonalDataComponent
  },
  {
    path:'bookmarked',
    component: BargainsBookmarkedComponent
  },
  {
    path:'booked',
    component: BargainsBookedComponent
  },
  {
    path:'',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProfileRoutingModule { }
