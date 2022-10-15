export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  discount: number;
  priceFormated: string | number;
  discountFormated: string | number;
  rating: {
    rate: number;
    count: number;
  };
}

export default Product;
