import { Outlet, ScrollRestoration } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function AppLayout() {
  return (
    <>
      <Navigation />
      <main className="pb-16 sm:pb-0 flex flex-col gap-20 min-h-screen">
        <Outlet />
      <Footer />
        <ScrollRestoration />
      </main>
    </>
  );
}
