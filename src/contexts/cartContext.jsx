import { createContext, useContext, useState } from "react";
const CartContext = createContext();
export function useCartContext() { return useContext(CartContext); }


export function CartProvider({ children }) {
  const [cart, setCart] = useState({});

  function addToCart(product) {
    setCart((prev) => {
      const newCart = { ...prev };
      if (newCart[product.id]) {
        newCart[product.id] = { ...newCart[product.id], quantity: newCart[product.id].quantity + 1 };
      } else {
        newCart[product.id] = { ...product, quantity: 1 };
      }
      return newCart;
    });
  }

  function removeCartItem (productId) {
    setCart((prev) => {
      const newCart = { ...prev };
      if (newCart[productId]) {
        delete newCart[productId];
      }
      return newCart;
    });
  }

  function addQuantity(productId) {
    setCart((prev) => {
      const newCart = { ...prev };
      if (newCart[productId] && newCart[productId].quantity < 25) {
        newCart[productId] = {...newCart[productId], quantity: newCart[productId].quantity + 1};
      }
      return newCart;
    });
  }

    function substractQuantity(productId) {
    setCart((prev) => {
      const newCart = { ...prev };
      if (newCart[productId] && newCart[productId].quantity > 1) {
        newCart[productId] = {...newCart[productId], quantity: newCart[productId].quantity - 1};
      }
      return newCart;
    });
  }


  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, removeCartItem, addQuantity, substractQuantity }}>
      {children}
    </CartContext.Provider>
  );
}