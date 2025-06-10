import { createContext, useContext, useState } from "react";
import { toast } from "sonner";
const CartContext = createContext();
export function useCartContext() { return useContext(CartContext); }


export function CartProvider({ children }) {
  const [cart, setCart] = useState({});

  function addToCart(product, quantity = 1) {
    let toastMessage = "";
    if (cart[product.id] && cart[product.id].quantity + quantity > 25) {
      toast.error("You cannot add more than 25 items of the same product to your cart.");
      return;
    }
    setCart((prev) => {
      const newCart = { ...prev };
      if (newCart[product.id]) {
        newCart[product.id] = { ...newCart[product.id], quantity: newCart[product.id].quantity + quantity };
        toastMessage = `${product.title} quantity updated to ${newCart[product.id].quantity}.`;
      } else {
        newCart[product.id] = { ...product, quantity: quantity };
        toastMessage = `${quantity > 1 ? `${quantity}x ` : ``}${product.title} has been added to your cart.`;
      }
      return newCart;
    });
    toast.success(toastMessage);
  }

  function removeCartItem(productId) {
    setCart((prev) => {
      const newCart = { ...prev };
      if (newCart[productId]) {
        delete newCart[productId];
      }
      return newCart;
    });
    toast.warning("Item has been removed from your cart.");
  }

  function addQuantity(productId) {
    if (cart[productId] && cart[productId].quantity >= 25) {
      toast.error("You cannot add more than 25 items of the same product to your cart.");
      return;
    }
    setCart((prev) => {
      const newCart = { ...prev };
      if (newCart[productId] && newCart[productId].quantity < 25) {
        newCart[productId] = { ...newCart[productId], quantity: newCart[productId].quantity + 1 };
      }
      return newCart;
    });
  }

  function substractQuantity(productId) {
    if (cart[productId] && cart[productId].quantity <= 1) {
      toast.error("You cannot have less than 1 item of the same product in your cart. Remove the item instead.");
      return;
    }
    setCart((prev) => {
      const newCart = { ...prev };
      if (newCart[productId] && newCart[productId].quantity > 1) {
        newCart[productId] = { ...newCart[productId], quantity: newCart[productId].quantity - 1 };
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