import { Outlet, ScrollRestoration } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { FiltersProvider } from "../contexts/filterContext";
import { CartProvider } from "../contexts/cartContext";

export default function AppLayout() {
  return (
    <>
      <FiltersProvider>
        <CartProvider>
          <Navigation />
          <main className="sm:pb-0 flex flex-col min-h-screen">
            <Outlet />
            <ScrollRestoration />
          </main>
          <Footer />
        </CartProvider>
      </FiltersProvider>
    </>
  );
}
