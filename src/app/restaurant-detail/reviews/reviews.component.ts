import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { Observable } from 'rxjs';
import { Review } from './review.model';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
})
export class ReviewsComponent implements OnInit {
  reviews: Observable<Review[]>;

  constructor(private route: ActivatedRoute, private restaurantsService: RestaurantsService) { }

  ngOnInit() {
    const id = this.route.parent.snapshot.params['id'];
    
    this.reviews = this.restaurantsService.reviewsOfRestaurant(id);
  }

}
