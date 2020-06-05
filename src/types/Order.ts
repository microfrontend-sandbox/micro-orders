export interface Order {
  id: number;
  products: Product[];
}

export interface OrdersResult {
  orders: Order[];
}

export interface OrderResult {
  order: Order;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}