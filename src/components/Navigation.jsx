import {
  HouseIcon,
  InfoIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
} from "@phosphor-icons/react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Navigation() {
  const navItems = [
    { name: "Home", path: "/", Icon: HouseIcon, cart: false },
    { name: "Products", path: "/products", Icon: ShoppingBagIcon, cart: false },
    { name: "Cart", path: "/cart", Icon: ShoppingCartIcon, cart: true },
    { name: "About", path: "/about", Icon: InfoIcon, cart: false },
  ];

  
  const [activeItem, setActiveItem] = useState(0);

  return (
    <>
        <nav className="fixed sm:relative w-full safe-bottom overflow-x-hidden p-2 bottom-0 sm:top-0 sm:bottom-auto bg-white border-t border-gray-200 sm:flex sm:justify-between sm:items-center sm:mx-auto sm:max-w-7xl">
          <div className="hidden sm:block">
            <div className="font-bold text-2xl">Shopping cart Project</div>
          </div>
          <div className="grid grid-cols-4 gap-4 place-items-center">
            {navItems.map((item, index) => {
              return (
                <Link
                  to={item.path}
                  key={index}
                  className="flex flex-col gap-1 items-center sm:flex-row"
                  onClick={() => setActiveItem(index)}
                >
                  <div className="sm:hidden">
                    <div className="relative">
                      <item.Icon
                        weight={"fill"}
                        className={`absolute inset-0 text-primary text-[30px] sm:text-[20px] transition duration-300 ${
                          index === activeItem ? "opacity-100" : "opacity-0"
                        }`}
                      />
                      <item.Icon
                        weight={"thin"}
                        className={`text-[30px] sm:text-[20px] transition duration-150 ${
                          index === activeItem ? "opacity-0" : "opacity-100"
                        }`}
                      />
                    </div>
                  </div>
                  <div
                    className={`text-xs relative ${
                      index === activeItem
                        ? "text-primary font-bold sm:text-base sm:font-bold sm:font-normal"
                        : "font-light sm:text-base sm:font-normal"
                    }`}
                  >
                    {item.name}
                    {item.cart && (
                      <div className={`hidden absolute -top-3 -right-4 sm:-top-1 sm:-right-4 text-[8px] sm:text-[10px] outline-2 outline-white font-bold text-white bg-red-400 h-4 w-4 rounded-full overflow-hidden flex items-center justify-center`}>
                        <div>99</div>
                      </div>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </nav>
    </>
  );
}
