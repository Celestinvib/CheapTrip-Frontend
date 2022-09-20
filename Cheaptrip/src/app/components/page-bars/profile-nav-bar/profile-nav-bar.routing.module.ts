import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BargainsBookmarkedComponent } from '../../profile/pages/bargains-bookmarked/bargains-bookmarked.component';
import { PersonalDataComponent } from '../../profile/pages/personal-data/personal-data.component';
import { BargainsBookedComponent } from '../../profile/pages/bargains-booked/bargains-booked.component';
import { ProfileComponent } from '../../profile/profile.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'/mydata',
    pathMatch: 'full'
  },
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
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProfileNavBarRoutingModule { }
