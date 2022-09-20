import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Bargain } from '../../../models/bargain/bargain.model';
import { BargainService } from '../../../services/bargain/bargain.service';
import { Accommodation } from '../../../models/accommodation/accommodation.model';
import { AccommodationService } from 'src/app/services/accommodation/accommodation.service';

@Component({
  selector: 'app-bargain',
  templateUrl: './bargain.component.html',
  styleUrls: ['./bargain.component.css']
})
export class BargainComponent implements OnInit {

  bargain: Bargain = {
    id: 1,
    title: '',
    image: '',
    price: 0,
    description: ''
  }

  accommodation: Accommodation = {
    id: 1,
    name: '',
    address: '',
    category: '',
    latitude: 0,
	  longitude: 0,
    rating: 0

  }

  constructor(private activatedRoute: ActivatedRoute, private bargainService: BargainService, private accomodationService: AccommodationService, private router: Router) {
    $(document).ready(function(){
      var zindex = 0;

      $("div.card").click(function(e){
        e.preventDefault();

        var isShowing = false;

        if ($(this).hasClass("show")) {
          isShowing = true
        }

        if ($("div.cards").hasClass("showing")) {
          // a card is already in view
          $("div.card.show")
            .removeClass("show");

          if (isShowing) {
            // this card was showing - reset the grid
            $("div.cards")
              .removeClass("showing");
          } else {
            // this card isn't showing - get in with it
            $(this)
              .css({zIndex: zindex})
              .addClass("show");

          }

          zindex++;

        } else {
          // no cards in view
          $("div.cards")
            .addClass("showing");
          $(this)
            .css({zIndex:zindex})
            .addClass("show");

          zindex++;
        }

      });
    });
   }

  ngOnInit(): void {
    this.getBargain();
    this.getAccommodation();
  }

  getBargain() {
    this.bargainService.get(this.bargain.id)
      .subscribe(
        (result) => {
          this.bargain = result;
          console.log('result ->' + result);

        },
        (error) => {
          console.log('Was impossible to take bargain info');
        }
      );
  }

  getAccommodation() {
    this.accomodationService.get(this.accommodation.id)
      .subscribe(
        (result) => {
          this.accommodation = result;
          console.log('result ->' + result);

        },
        (error) => {
          console.log('Was impossible to take accomodation info');
        }
      );
  }
}
