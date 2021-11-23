import { Component, OnInit } from "@angular/core";
import { RadioOption } from "app/shared/radio/radio-option.model";

@Component({
  selector: "mt-order",
  templateUrl: "./order.component.html",
})
export class OrderComponent implements OnInit {
  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MONEY'},
    {label: 'Cartão de Débito', value: 'DEBIT'},
    {label: 'Cartão de Crédito', value: 'CREDIT'},
  ];

  constructor() {}

  ngOnInit() {}
}
