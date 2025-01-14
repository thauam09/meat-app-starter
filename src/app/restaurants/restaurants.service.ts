import { Restaurant } from "./restaurant/restaurant.model";
import { MEAT_API } from "app/app.api";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { ErrorHandler } from "app/app.error-handler";
import { Review } from "app/restaurant-detail/reviews/review.model";
import { MenuItem } from "app/restaurant-detail/menu-item/menu-item.model";

@Injectable()
export class RestaurantsService {
  constructor(private http: Http) {}

  restaurants(): Observable<Restaurant[]> {
    return this.http
      .get(`${MEAT_API}/restaurants`)
      .map((response) => response.json())
      .catch(ErrorHandler.handleError);
  }

  restaurantById(id: string): Observable<Restaurant> {
    return this.http
      .get(`${MEAT_API}/restaurants/${id}`)
      .map((response) => response.json())
      .catch(ErrorHandler.handleError);
  }

  reviewsOfRestaurant(id: string): Observable<Review[]> {
    return this.http
      .get(`${MEAT_API}/restaurants/${id}/reviews`)
      .map((response) => response.json())
      .catch(ErrorHandler.handleError);
  }

  menuOfRestaurants(id: string): Observable<MenuItem[]> {
    return this.http
      .get(`${MEAT_API}/restaurants/${id}/menu`)
      .map((response) => response.json())
      .catch(ErrorHandler.handleError);
  }
}
