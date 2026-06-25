import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

function Layout() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 p-10 overflow-y-auto">
        <Header />
        <section className="py-10">
          <Outlet />
        </section>
      </main>
    </div>
  );
}

export default Layout;
