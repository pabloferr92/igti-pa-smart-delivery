import ICart from './cart/

export interface IOrder {
  id: number;
  user: string;
  created_at: Date;
  state: string;
  total_price : number;
}
