import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FeatureService } from '../../../../services/feature/feature.service';
import { Feature } from '../../../../models/feature/feature.model';

@Component({
  selector: 'app-feature-update',
  templateUrl: './feature-update.component.html',
  styleUrls: ['./feature-update.component.css']
})
export class FeatureUpdateComponent implements OnInit {

  form: any = {
    name:null
    };

    feature: Feature = {
    name: ''
  }

  itemUpdated: boolean = false;

  //Pagination variables
  lastPage:number =1;

  lastItemsViewed:number = 5;

  constructor(
    private featureService: FeatureService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.checkParams();
  }

  /**
  * Check the routes params
  * Allows the user to get back to the page of the list where they were before (if they were on the item-list of this item)
  * With the same items displayed on the list
  */
   checkParams() {
    this.route.queryParams
    .subscribe(params => {

      if(params['lastPage']) {
        this.lastPage = params['lastPage'];
      }

      if(params['lastItemsViewed']) {
        this.lastItemsViewed = params['lastItemsViewed'];
      }

      if(params['id']) {
        this.feature.id = params['id'];
        this.getFeature();
      }else {
        this.router.navigate(['/site-admin/cities'],
        { queryParams: { lastPage: this.lastPage , lastItemsViewed: this.lastItemsViewed } });
      }
    });
  }

  /**
  * Get a Feature
  */
  getFeature() {
    this.featureService.get(this.feature.id)
    .subscribe(
      (result) => {
        this.feature = result;
      },
      (error) => {
        console.log('There has been a getting that city');
        this.router.navigate(['/site-admin/cities']);
      }
    );
  }

  /**
  * When the form is submmited
  */
  onSubmit(): void {
    if( this.feature.name != '') {
      this.updateFeature();
    }
  }

  /**
  * Update a Feature
  */
  updateFeature(): void {
    const data = {
      name: this.feature.name
    }

    this.featureService.update(this.feature.id,data)
    .subscribe(
      response => {
        this.itemUpdated= true;
        setTimeout(() =>
          {
            this.itemUpdated= false;
          },
          6000);
      },
      error => {
        console.log(error);
      }
    )
  }

  /**
  * Delete a Feature
  */
  deleteFeature() {
    this.featureService.delete(this.feature.id)
    .subscribe(
      (result) => {
        this.feature = {
          id: 0 ,
          name: ''
        }
        this.router.navigate(['/site-admin/cities']);
      },
      (error) => {
        console.log('There has been a problem trying to delete the city');
      }
    );
  }

}
