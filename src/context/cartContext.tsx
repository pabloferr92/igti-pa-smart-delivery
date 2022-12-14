import React, {
  useState,
  useContext,
  createContext,
  FC,
  useEffect,
} from 'react';
import ICart from '../interfaces/cart';

interface ICartContext {
  cartItems: ICart[];
  totalPrice: Number;
  addICartItem: (value: ICart) => void;
  removeCartItem: (value: ICart) => void;
  verifyIfContainsCartItem: (value: ICart) => boolean;
  //getCartItens: () => null;
  releaseCart: () => void;
}

const defaultState = {
  cartItems: [],
  totalPrice: 0,
  addICartItem: () => null,
  removeCartItem: () => null,
  releaseCart: () => null,
  verifyIfContainsCartItem: () => false,
  //getCartItens: () => null,
};

const CartContext = createContext<ICartContext>(defaultState);
export const useCartContext = () => useContext(CartContext);

const CartProvider: FC = ({ children }) => {
  const [cartItems, setCartItems] = useState<ICart[]>(defaultState.cartItems);
  const [totalPrice, setTotalPrice] = useState<Number>(0);

  const addICartItem = (value: ICart) => {
    const newItems: ICart[] = [...cartItems, value];
    setCartItems(newItems);
  };

  const removeCartItem = (value: ICart) => {
    const newItems: ICart[] = [...cartItems];
    const itemIndex = newItems.indexOf(value);
    if (itemIndex > -1) {
      newItems.splice(itemIndex, 1);
    }
    setCartItems(newItems);
  };

  const releaseCart = () => {
    console.log('Executando reelease');
    setCartItems([]);
    setTotalPrice(0);
  };

  const verifyIfContainsCartItem = (value: ICart) => {
    const index = cartItems.indexOf(value);
    if (index > -1) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    cartItems.forEach(element => {
      setTotalPrice(totalPrice + element.total_price);
    });
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalPrice,
        addICartItem,
        removeCartItem,
        verifyIfContainsCartItem,
        releaseCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
