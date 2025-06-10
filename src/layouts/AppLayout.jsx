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
          <Toaster
            visibleToasts={9}
            position="top-center"
            icons={{
              success: (
                <CheckCircleIcon
                  weight="fill"
                  size={20}
                  className="text-green-500"
                />
              ),
              warning: (
                <ExclamationMarkIcon
                  weight="fill"
                  size={20}
                  className="text-yellow-500"
                />
              ),
              error: (
                <ExclamationMarkIcon
                  weight="fill"
                  size={20}
                  className="text-red-500"
                />
              ),
            }}
            duration={3000}
            swipeDirections={["top", "left", "right"]}
          />
          <Navigation />
          <div data-vaul-drawer-wrapper="">
            <div className="relative flex min-h-screen flex-col bg-background">
              <main className="sm:pb-0 flex flex-col w-full min-h-screen">
                <Outlet />
                <ScrollRestoration />
              </main>
              <Footer />
            </div>
          </div>
        </CartProvider>
      </FiltersProvider>
    </>
  );
}
