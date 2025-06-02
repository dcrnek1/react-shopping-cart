import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

export default function AppLayout() {


  return (
    <>
    <Navigation />
        <main className="max-w-7xl m-auto p-2">
          <Outlet />
        </main>
    </>
  );
}
