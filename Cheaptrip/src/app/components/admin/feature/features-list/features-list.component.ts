import { Component, OnInit } from '@angular/core';
import { FeatureService } from '../../../../services/feature/feature.service';
import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-features-list',
  templateUrl: './features-list.component.html',
  styleUrls: ['./features-list.component.css']
})
export class FeaturesListComponent implements OnInit {

  features:any = null;

  idItemToDelete:number = 0;

  //Pagination variables
  pageActual: number = 1;  //Current page of the table

  ItemsViewed: number = 5; //Items viewed in table

  constructor(
    private featureService: FeatureService,
    private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
      this.checkParams();
      this.getFeatures();
  }

   /**
  * Check the routes params
  * Allows the user to get back to the page of the list where they were before (if they were creating or updatin some item of the list)
  * With the same items displayed on the list
  */
    checkParams() {
      this.route.queryParams
      .subscribe(params => {
        if(params['lastPageActual']) {
          this.pageActual = params['lastPageActual'];
        }

        if(params['lastItemsViewed']) {
          this.ItemsViewed = params['lastItemsViewed'];
        }
      });
    }

    /**
    * Get all the features
    */
    getFeatures() {
      this.featureService.getAll()
      .subscribe(
        (result) => {
          this.features = result;
        },
        (error) => {
          console.log('There has been a problem');
        }
      );
    }

    /**
    * Set the item that maybe is deleted
    * When clicking on the delete button on item in the list, the its id is saved, it will be used later on the delete modal to do so.
    * @param featureId id of the city that maybe is deleted
    */
    MaybeDeleteThisFeature(featureId: number){
      this.idItemToDelete = featureId;
    }

    /**
    * Delete a feature
    */
    deleteFeature() {
      this.featureService.delete(this.idItemToDelete)
      .subscribe(
        (result) => {
          this.reloadPage();
        },
        (error) => {
          console.log('There has been a problem trying to delete the city');
        }
      );
    }

    /**
    * Reload the current page
    */
    reloadPage(): void {
      window.location.reload();
    }

    /**
    * Change the items viewed on the list (5,10 or 20)
    */
    changeItemsViewed(items:number): void {
      this.ItemsViewed = items;
    }

}
