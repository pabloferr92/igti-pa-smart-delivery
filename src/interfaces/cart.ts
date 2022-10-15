import { IOrder } from './order';
import Product from './product';

interface ICart {
  product: Product;
  quantity: number;
  total_price: number;
  order: IOrder;
}

export default ICart;
