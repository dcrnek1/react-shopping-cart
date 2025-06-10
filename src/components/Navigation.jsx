import {
  HouseIcon,
  InfoIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
} from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../contexts/cartContext";

export default function Navigation() {
  const navItems = [
    { name: "Home", path: "/", Icon: HouseIcon, cart: false },
    { name: "Products", path: "/products", Icon: ShoppingBagIcon, cart: false },
    { name: "Cart", path: "/cart", Icon: ShoppingCartIcon, cart: true },
  ];

  const {cart} = useCartContext();
  const cartCount = Object.values(cart).reduce((sum) => sum + 1, 0);

  return (
    <>
      <div className="relative shadow-lg/2 top-0 left-0 w-full p-2 text-black bg-white sm:hidden z-50">
        <div className=" flex flex-col">
          <div className="font-bold text-2xl">CLOTHING</div>
          <div className="font-normal text-xl">STORE</div>
        </div>
      </div>
      <div className="sm:shadow-xl/2 w-full sm:sticky sm:top-0 bg-white z-50">
        <nav className="fixed z-50 sm:relative w-full safe-bottom p-2 bottom-0 sm:top-0 sm:bottom-auto bg-white border-t border-gray-200 sm:flex sm:justify-between sm:items-center sm:mx-auto sm:max-w-7xl">
          <div className="hidden sm:relative sm:block">
            <div className=" flex flex-col">
              <div className="font-bold text-2xl">CLOTHING</div>
              <div className="font-normal text-xl">STORE</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 place-items-center">
            {navItems.map((item, index) => {
              return (
                <NavLink
                  to={item.path}
                  key={index}
                  className="flex flex-col gap-1 items-center sm:flex-row"
                >
                  {({isActive}) => (
                    <>
                    <div className="sm:hidden">
                    <div className="relative">
                      <item.Icon
                        weight={"fill"}
                        className={`absolute inset-0 text-primary text-[30px] sm:text-[20px] transition duration-200 ${
                          isActive ? "opacity-100" : "opacity-0"
                        }`}
                      />
                      <item.Icon
                        weight={"thin"}
                        className={`text-[30px] sm:text-[20px] transition duration-100 ${
                          isActive ? "opacity-0" : "opacity-100"
                        }`}
                      />
                    </div>
                  </div>
                  <div
                    className={`text-xs relative hover:underline underline-offset-3 sm:w-20 sm:text-center ${
                      isActive
                        ? "text-primary font-bold sm:text-base sm:font-bold sm:font-semibold sm:underline"
                        : "font-light sm:text-base sm:font-normal"
                    }`}
                  >
                    {item.name}
                    {item.cart && (
                      <div
                        className={`${cartCount === 0 ? "hidden" : "block"} absolute -top-3 -right-4 sm:-top-1 sm:right-1 text-[8px] sm:text-[10px] outline-2 outline-white font-bold text-white bg-red-400 h-4 w-4 rounded-full flex items-center justify-center`}
                      >
                        <div>{cartCount}</div>
                      </div>
                    )}
                  </div>
                  </>
                  )}
                </NavLink>
              );
            })}
          </div>
        </nav>
      </div>
    </>
  );
}
