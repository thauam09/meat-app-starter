import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CartItem } from "app/restaurant-detail/shopping-cart/cart-item.model";
import { RadioOption } from "app/shared/radio/radio-option.model";
import { Order, OrderItem } from "./order.model";
import { OrderService } from "./order.service";

@Component({
  selector: "mt-order",
  templateUrl: "./order.component.html",
})
export class OrderComponent implements OnInit {
  delivery = 8;

  paymentOptions: RadioOption[] = [
    { label: "Dinheiro", value: "MONEY" },
    { label: "Cartão de Débito", value: "DEBIT" },
    { label: "Cartão de Crédito", value: "CREDIT" },
  ];

  constructor(private orderService: OrderService, private router: Router) {}

  ngOnInit() {}

  itemsValue(): number {
    return this.orderService.itemsValue();
  }

  cartItems(): CartItem[] {
    return this.orderService.cartItems();
  }

  increaseQty(item: any) {
    this.orderService.increaseQty(item);
  }

  decreaseQty(item: any) {
    this.orderService.decreaseQty(item);
  }

  remove(item) {
    this.orderService.remove(item);
  }

  checkOrder(order: Order) {
    order.orderItems = this.cartItems().map(
      (item: CartItem) => new OrderItem(item.quantity, item.menuItem.id)
    );

    this.orderService.checkOrder(order).subscribe((order: string) => {
      this.orderService.clear();
      this.router.navigate(["order-summary"]);
    });
    console.log(order);
  }
}
