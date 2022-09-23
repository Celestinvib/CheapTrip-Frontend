import { Component, OnInit } from '@angular/core';
import { BargainService } from '../../../../services/bargain/bargain.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bargains-list',
  templateUrl: './bargains-list.component.html',
  styleUrls: ['./bargains-list.component.css']
})
export class BargainsListComponent implements OnInit {

  bargains:any = null;

  idItemToChangeStatus:number = 0;

  idItemToDelete:number = 0;

  //Pagination variables
  pageActual: number = 1;  //Current page of the table

  ItemsViewed: number = 5; //Items viewed in table

  constructor(
    private bargainService: BargainService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.checkParams();
    this.getBargains();
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
    * Get all the bargains
    */
    getBargains() {
      this.bargainService.getReallyAll()
      .subscribe(
        (result) => {

          this.bargains = result;
        },
        (error) => {
          console.log('There has been a problem');
        }
      );
    }

    /**
* Set the item that maybe its status is changed
* When clicking on the change status button on item in the list, the its id is saved, it will be used later on the change status modal to do so.
* @param bargainId id of the bargain that maybe is updated
*/
   MaybeChangeStatusThisBargain(bargainId: number){
    this.idItemToChangeStatus = bargainId;
  }

  /**
  * Change status of a Bargain
  */
  changeStatusBargain() {
    this.bargainService.changeStatus(this.idItemToChangeStatus,null)
    .subscribe(
      (result) => {
        this.reloadPage();
      },
      (error) => {
        console.log('There has been a problem changing the bargain');
      }
    );
  }

    /**
    * Set the item that maybe is deleted
    * When clicking on the delete button on item in the list, the its id is saved, it will be used later on the delete modal to do so.
    * @param bargainId id of the bargain that maybe is deleted
    */
    MaybeDeleteThisBargain(bargainId: number){
      this.idItemToDelete = bargainId;
    }

    /**
    * Delete a bargain
    */
    deleteBargain() {
      this.bargainService.delete(this.idItemToDelete)
      .subscribe(
        (result) => {
          this.reloadPage();
        },
        (error) => {
          console.log('There has been a problem trying to delete the bargain');
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
