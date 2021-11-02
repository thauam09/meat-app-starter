import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  @Input() restaurant: Restaurant;

  constructor() { }

  ngOnInit() {
  }

}
