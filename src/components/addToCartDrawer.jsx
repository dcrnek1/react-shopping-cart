import { ShoppingCartIcon } from "@phosphor-icons/react";
import { Drawer } from "vaul";
import { useCartContext } from "../contexts/cartContext";
import { useState } from "react";
import { toast } from "sonner";
import LazyImage from "../utils/SmartImage";

export default function VaulDrawer({ product, children }) {
  const { cart, addToCart } = useCartContext();
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);

  const handleQuantitySubstract = () => {
    setQuantity((prev) => Math.max(prev - 1, 1));
    if (quantity <= 1) {
      toast.error("Quantity cannot be less than 1.");
    }
  };

  const handleQuantityAdd = (quantity) => {
    // Ensure quantity does not exceed a reasonable
    console.log(quantity + 1);
    if (
      cart[product.id] &&
      25 - cart[product.id].quantity - quantity - 1 >= 0
    ) {
      setQuantity((prev) => prev + 1);
    } else if (!cart[product.id] && quantity + 1 <= 25) {
      setQuantity((prev) => prev + 1);
    } else {
      toast.error("You cannot add more than 25 same items to the cart.");
    }
  };

  return (
    <Drawer.Root
      shouldScaleBackground
      setBackgroundColorOnScale={false}
      onOpenChange={() => {
        setQuantity(1);
        setOpen(!open);
      }}
      open={open}
      autoFocus={true}
      direction="bottom"
    >
      <Drawer.Trigger asChild>{children}</Drawer.Trigger>
      <Drawer.Portal className="bg-black">
        <Drawer.Overlay className="fixed inset-0 bg-black/40 z-50 !mr-0 backdrop-blur-xs" />
        <Drawer.Content className="fixed bottom-0 left-0 w-full bg-white z-50 rounded-t-[10px] shadow-lg">
          <div className="pt-4 max-w-7xl mx-auto mb-10">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-6"></div>
            <div className="w-full flex flex-col items-center justify-center gap-10">
              <div className="text-xl sm:text-3xl font-semibold">
                <Drawer.Title>Choose Quantity</Drawer.Title>
              </div>
              <div className="text-sm sm:text-md font-light text-gray-400 -mt-10">
                <Drawer.Description>
                  of product to be added to cart.
                </Drawer.Description>
              </div>
              <div className="flex flex-row gap-5 max-w-xs sm:max-w-xl border-1 p-2 rounded-lg border-gray-200">
                <LazyImage
                  src={product.image}
                  className="h-20 w-25 sm:h-40 sm:w-40"
                  object="object-contain object-top"
                />
                <div className="text-sm text-gray-500 font-light flex flex-col justify-start mt-0">
                  <div className="text-base font-medium sm:text-lg text-gray-900 line-clamp-1">{product.title}</div>
                  <div>{cart[product.id] && `${cart[product.id].quantity} already in your cart`}</div>
                </div>
              </div>
              <div className="flex flex-row items-center gap-10">
                <div
                  onClick={handleQuantitySubstract}
                  className="text-4xl font-thin h-12 w-12 flex justify-center items-center rounded-full border-1 border-gray-200 transition duration-100 active:bg-gray-200 hover:border-gray-100 hover:bg-gray-100"
                >
                  <div className="pl-1.5 pt-1">-</div>
                </div>
                <div className="font-medium text-6xl sm:text-7xl w-25 flex justify-center items-center">
                  {quantity}
                </div>
                <div
                  onClick={() => handleQuantityAdd(quantity)}
                  className="text-3xl font-thin h-12 w-12 flex justify-center items-center rounded-full border-1 border-gray-200 transition duration-100 hover:active:border-gray-100 active:bg-gray-200 hover:bg-gray-100"
                >
                  +
                </div>
              </div>
              <div className="flex flex-row items-center gap-5 px-4 w-full justify-center">
                <Drawer.Close asChild>
                  <button className="text-gray-800 w-full sm:w-70 transition-colors mt-0 sm:mt-0 bg-gray-100 hover:bg-gray-300/70 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none flex items-center gap-3 justify-center">
                    Cancel
                  </button>
                </Drawer.Close>
                <button
                  onClick={() => {
                    addToCart(product, quantity);
                    setOpen(!open);
                  }}
                  className="text-white w-full sm:w-70 transition-colors mt-0 sm:mt-0 bg-primary hover:bg-primary/70 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none flex items-center gap-3 justify-center"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
