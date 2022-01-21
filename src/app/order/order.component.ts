import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from "@angular/forms";

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
  orderForm: FormGroup;

  delivery = 8;

  paymentOptions: RadioOption[] = [
    { label: "Dinheiro", value: "MONEY" },
    { label: "Cartão de Débito", value: "DEBIT" },
    { label: "Cartão de Crédito", value: "CREDIT" },
  ];

  constructor(
    private orderService: OrderService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.orderForm = this.formBuilder.group(
      {
        name: this.formBuilder.control("", [
          Validators.required,
          Validators.minLength(5),
        ]),
        email: this.formBuilder.control("", [
          Validators.required,
          Validators.email,
        ]),
        emailConfirmation: this.formBuilder.control("", [
          Validators.required,
          Validators.email,
        ]),
        address: this.formBuilder.control(""),
        number: this.formBuilder.control(""),
        optionalAddress: this.formBuilder.control(""),
        paymentOption: this.formBuilder.control(""),
      },
      { validator: OrderComponent.equalsTo }
    );
  }

  static equalsTo(group: AbstractControl): { [key: string]: boolean } {
    const email = group.get("email");
    const emailConfirmation = group.get("emailConfirmation");

    if (!email || !emailConfirmation) {
      return undefined;
    }

    if (email.value !== emailConfirmation.value) {
      return { emailsNotMatch: true };
    }

    return undefined;
  }

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
