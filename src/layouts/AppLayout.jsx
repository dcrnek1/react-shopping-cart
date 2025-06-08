import { Outlet, ScrollRestoration } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { FiltersProvider } from "../contexts/filterContext";

export default function AppLayout() {
  return (
    <>
      <FiltersProvider>
        <Navigation />
        <main className="sm:pb-0 flex flex-col min-h-screen">
          <Outlet />
          <ScrollRestoration />
        </main>
        <Footer />
      </FiltersProvider>
    </>
  );
}
