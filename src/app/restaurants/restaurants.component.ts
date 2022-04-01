import { Component, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { Restaurant } from "./restaurant/restaurant.model";
import { RestaurantsService } from "./restaurants.service";

@Component({
  selector: "mt-restaurants",
  templateUrl: "./restaurants.component.html",
  animations: [
    trigger("toggleSearch", [
      state(
        "hidden",
        style({
          opacity: 0,
          "max-height": "0px",
        })
      ),
      state(
        "visible",
        style({
          opacity: 1,
          "max-height": "70px",
          "margin-top": "20px",
        })
      ),
      transition("* => *", animate("250ms 0s ease-in-out")),
    ]),
  ],
})
export class RestaurantsComponent implements OnInit {
  restaurants: Restaurant[];

  searchBarState = "hidden";

  constructor(private restaurantsService: RestaurantsService) {}

  ngOnInit() {
    this.restaurantsService
      .restaurants()
      .subscribe((restaurants) => (this.restaurants = restaurants));
  }

  toggleSearchBar(): void {
    this.searchBarState =
      this.searchBarState === "hidden" ? "visible" : "hidden";
  }
}
