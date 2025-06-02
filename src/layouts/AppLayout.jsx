import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <>
      <nav className="absolute w-full bottom-0 sm:top-0 sm:bottom-auto bg-blue-400">
        Navigation
      </nav>
      <Outlet />
    </>
  );
}
