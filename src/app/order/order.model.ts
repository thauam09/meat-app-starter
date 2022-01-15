class Order {
  public address: string;
  public number: number;
  public optionalAddress: string;
  public paymentOption: "DEBIT" | "CREDIT" | "MONEY";
  public orderItems: OrderItem[];
}

class OrderItem {
  constructor(public quantity, public menuId: string) {}
}

export { Order, OrderItem };
