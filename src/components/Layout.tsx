import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function Layout() {
	return (
		<div className="flex h-screen">
			<Sidebar />
			<main className="flex-1 p-5 overflow-y-auto">
				<Outlet />
			</main>
		</div>
	);
}

export default Layout;
