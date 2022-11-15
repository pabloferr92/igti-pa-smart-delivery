import ICart from './cart/

export interface IOrder {
  id: number;
  user: string;
  created_at: Date;
  state:  {value : string, display_value : string};
  total_price : number;
}
