import { MenuItem } from "../menu-item/menu-item.model";
import { CartItem } from "./cart-item.model";

export class ShoppinCartService {
  items: CartItem[] = [];

  clear() {
    this.items = [];
  }

  addItem(item: MenuItem) {
    let foundItem = this.items.find(
      (cartItem) => cartItem.menuItem.id === item.id
    );
    if (foundItem) {
      foundItem.quantity++;
      // this.items.map(cartItem => {
      //   if (cartItem.menuItem.id === foundItem.menuItem.id) {
      //     cartItem.quantity++;
      //   }
      // })
    } else {
      this.items.push(new CartItem(item));
    }
  }

  removeItem(item: CartItem) {
    // this.items = this.items.filter(cartItem => cartItem.menuItem.id !== item.id);
    this.items.splice(this.items.indexOf(item), 1);
  }

  total(): number {
    return this.items
      .map((item) => item.value())
      .reduce((prev, value) => prev + value, 0);
  }
}
