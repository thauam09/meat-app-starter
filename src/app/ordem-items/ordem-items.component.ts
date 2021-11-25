import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-ordem-items',
  templateUrl: './ordem-items.component.html',
})
export class OrdemItemsComponent implements OnInit {
  @Input() items: CartItem;

  @Output() increaseQty = new EventEmitter<CartItem>();
  @Output() decreaseQty  = new EventEmitter<CartItem>();
  @Output() remove = new EventEmitter<CartItem>();

  constructor() { }

  ngOnInit() {
  }

  emitIncreaseQuantity(item: CartItem) {
    this.increaseQty.emit();
  }

  emitDecreaseQuantity(item: CartItem) {
    this.increaseQty.emit();
  }

  emitRemove(item: CartItem) {
    this.increaseQty.emit();
  }
}
