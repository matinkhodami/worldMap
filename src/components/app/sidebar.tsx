import { Outlet } from "react-router";
import { Navigation } from "../sidebar/navigation";

export function Sidebar() {
  return (
    <aside className="flex flex-col w-300 bg-water rounded-xl inset-shadow-sm inset-shadow-primary/30 p-3">
      <Navigation />
      <Outlet />
      <footer className="mt-auto text-center text-sm p-3 text-secondary-light">
        &copy; Copyright {new Date().getFullYear()} by WorldMap Inc.
      </footer>
    </aside>
  );
}
