import { Outlet, ScrollRestoration } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { FiltersProvider } from "../contexts/filterContext";
import { CartProvider } from "../contexts/cartContext";
import { Toaster } from "sonner";
import { CheckCircleIcon, ExclamationMarkIcon } from "@phosphor-icons/react";

export default function AppLayout() {
  return (
    <>
      <FiltersProvider>
        <CartProvider>
          <Navigation />
          <main className="sm:pb-0 flex flex-col w-screen min-h-screen">

            <Toaster visibleToasts={9} position="top-center" icons={{
              success: <CheckCircleIcon weight="fill" size={20} className="text-green-500" />,
              warning: <ExclamationMarkIcon weight="fill" size={20} className="text-yellow-500" />,
              error: <ExclamationMarkIcon weight="fill" size={20} className="text-red-500" />
            }} duration={3000} swipeDirections={['top', 'left', 'right']} />
            <Outlet />
            <ScrollRestoration />
          </main>
          <Footer />
        </CartProvider>
      </FiltersProvider>
    </>
  );
}
