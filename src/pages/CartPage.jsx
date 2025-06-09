import { XIcon } from "@phosphor-icons/react";
import { useCartContext } from "../contexts/cartContext";
import LazyImage from "../utils/SmartImage";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { cart, removeCartItem, addQuantity, substractQuantity } =
    useCartContext();
  const totalPrice = Object.values(cart).reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto p-2 pt-4 max-w-7xl w-full">
      <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
      {Object.keys(cart).length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-12 gap-4 font-gray-800">
          <div className="col-span-12 sm:col-span-8 flex flex-col gap-4">
            {Object.values(cart).map((product) => (
              <div
                key={product.id}
                className="flex sm:justify-between shadow-xs/2 flex-col sm:flex-row items-center p-2 sm:p-4 sm:gap-5 border border-gray-200 rounded-md"
              >
                <div className="flex flex-row-reverse sm:flex-row gap-2 sm:gap-7 w-full">
                  <div>
                    <LazyImage
                      src={product.image}
                      className="h-25 w-22"
                      object="object-contain"
                    />
                  </div>
                  <div className="flex flex-col gap-4 justify-between w-full">
                    <div className="text-lg font-normal flex flex-col gap-1">
                      <div className="line-clamp-1">
                        <Link to={`/products/${product.id}`}>
                          {product.title}
                        </Link>
                      </div>
                      <div className="text-sm text-gray-400 h-5">
                        {product.quantity > 1 &&
                          `€${product.price
                            .toFixed(2)
                            .replace(".", ",")} per item`}
                      </div>
                    </div>
                    <div className="flex flex-row gap-3 items-center hidden sm:block">
                      <button
                        onClick={() => removeCartItem(product.id)}
                        className="hover:cursor-pointer text-red-500 text-sm font-normal hover:underline hover:underline-offset-2 py-2 rounded flex gap-1 items-center"
                      >
                        <XIcon size={14} weight="bold" />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex gap-8 items-center justify-between sm:justify-end mt-5 sm:mt-0 w-full sm:w-auto">
                  <div className="block sm:hidden">
                    <button
                      onClick={() => removeCartItem(product.id)}
                      className="hover:cursor-pointer text-red-500 text-sm font-normal hover:underline hover:underline-offset-2 py-2 rounded flex gap-1 items-center"
                    >
                      <XIcon size={14} weight="bold" />
                      Remove
                    </button>
                  </div>
                  <div className="flex gap-8 items-center jusitfy-between">
                    <div className="flex flex-row gap-3 items-center border-1 rounded-md border-gray-200">
                      <button
                        onClick={() => substractQuantity(product.id)}
                        className="hover:cursor-pointer font-normal text-gray-500 text-xl h-10 w-7 rounded-md"
                      >
                        -
                      </button>
                      <div className="text-sm font-normal text-gray-800 w-5 text-center">
                        {product.quantity}
                      </div>
                      <button
                        onClick={() => addQuantity(product.id)}
                        className="hover:cursor-pointer font-normal text-gray-500 text-xl h-10 w-7 rounded-md"
                      >
                        +
                      </button>
                    </div>
                    <div className="font-semibold relative text-xl sm:text-lg flex flex-col w-20 gap-2 items-center">
                      <div>
                        €
                        {(product.price * product.quantity)
                          .toFixed(2)
                          .replace(".", ",")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="sm:col-span-4 col-span-12">
            <div className="p-5 sm:p-7 flex flex-col gap-4 border border-gray-200 rounded-md shadow-xs/2">
              <h2 className="text-lg font-semibold mb-5">Order Summary</h2>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Total Items:</span>
                <span className="font-normal">
                  {Object.keys(cart).length}
                </span>
              </div>{" "}
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Price exc. VAT:</span>
                <span className="font-normal text-black">
                  €{(totalPrice - totalPrice * 0.21).toFixed(2).replace(".", ",")}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">VAT:</span>
                <span className="font-normal text-black">
                  €{(totalPrice * 0.21).toFixed(2).replace(".", ",")}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Delivery:</span>
                <span className="font-normal text-black">
                  €{(19.99).toFixed(2).replace(".", ",")}
                </span>
              </div>
              <hr className="text-gray-200" />
              <div className="flex justify-between items-center mb-6">
                <span className="text-gray-800 font-semibold">Total:</span>
                <span className="font-semibold">
                  €
                  {(totalPrice + 19.99)
                    .toFixed(2)
                    .replace(".", ",")}
                </span>
              </div>
              <button className="bg-primary text-white py-2 rounded hover:bg-primary/80 transition-colors">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
