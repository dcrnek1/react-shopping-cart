import { Outlet, ScrollRestoration } from "react-router-dom";
import Navigation from "../components/Navigation";

export default function AppLayout() {
  return (
    <>
      <Navigation />
      <main className="pb-19">
        <Outlet />
        <ScrollRestoration />
      </main>
    </>
  );
}
