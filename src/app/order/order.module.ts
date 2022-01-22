import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "app/shared/shared.module";
import { DeliveryCostsComponent } from "./delivery-costs/delivery-costs.component";
import { OrdemItemsComponent } from "./order-items/order-items.component";
import { OrderComponent } from "./order.component";

const ROUTES: Routes = [{ path: "", component: OrderComponent }];

@NgModule({
  declarations: [OrderComponent, DeliveryCostsComponent, OrdemItemsComponent],
  imports: [SharedModule, RouterModule.forChild(ROUTES)],
})
export class OrderModule {}
