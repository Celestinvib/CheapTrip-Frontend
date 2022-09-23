import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { FeatureService } from '../../../../services/feature/feature.service';
import { Feature } from '../../../../models/feature/feature.model';

@Component({
  selector: 'app-feature-add',
  templateUrl: './feature-add.component.html',
  styleUrls: ['./feature-add.component.css']
})
export class FeatureAddComponent implements OnInit {

  form: any = {
    name:null
    };

    feature: Feature = {
    name: ''
  }

  itemAdded: boolean = false;

  //Pagination variables
  lastPage:number =1;

  lastItemsViewed:number = 5;

  constructor(
    private featureService: FeatureService,
    private route: ActivatedRoute
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

    });
  }

  /**
  * When the form is submmited
  */
   onSubmit(): void {

    if( this.feature.name != '') {
      this.saveFeature();
    }
  }

  /**
  * Save a feature
  */
  saveFeature(): void {

    const data = {
      name: this.feature.name
    }
     this.featureService.create(data)
     .subscribe(
       response => {
         //If the items is added successfully
        this.itemAdded= true; //it indicate it in the view with a popUp thanks to this var

        //Past 6 seconds the boolean is set to false therefore the item in the view disappear
         setTimeout(() =>
         {
           this.itemAdded= false;
         },
         6000);

       },
       error => {
         console.log(error);
       }
     )
  }
}
